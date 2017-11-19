import csv
import re

with open('terms.txt', 'r') as in_file:
	stripped = (line.strip() for line in in_file)
	print(stripped)
	# re.sub('\n\s*\n', '', stripped)
	# print(stripped)
	lines = []
	heading = re.compile('^[^a-z\n]{2,}')
	tag = ''
	for line in stripped:
		if heading.match(line):
			tag = line
			continue
		# split = line.split(":")
		split = [x.strip() for x in line.split(":")]
		split.insert(0, tag)
		lines.append(split)
	# lines = (line.split(":") for line in stripped if line)
	for line in lines:
		print(line)
	with open('terms.csv', 'w') as out_file:
		writer = csv.writer(out_file)
		writer.writerow(('title', 'intro'))
		writer.writerows(lines)