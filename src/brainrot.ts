#!/usr/bin/env node

import { Logger } from './logger';
import fs from 'fs';
import path from 'path';
import { cipher } from './cipher';

const pkg: { name: string, version: string, homepage: string } = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')).toString());
const log = new Logger(`${pkg.name} v${pkg.version} |`);

// Command line operation
if (require.main === module) {
	const args = process.argv.slice(2);

	// Get rotations, if specified
	let rotations: number | undefined;
	for (let i = 0; i < args.length; i += 2)
		if (args[i].startsWith('-r')) {
			rotations = parseInt(args[i + 1]);
			args.splice(i, 2);
		}
		else i--; // Offset the +=2

	// Validate rotations
	if (Number.isNaN(rotations))
		throw new Error('Invalid rotation provided');

	// Construct & validate input
	let input = args.join(' ');
	if (!input || input === '')
		throw new Error('No input provided');

	if (rotations)
		cipher(input, rotations, false);
	else for (let rot = 0; rot <= 26; rot++)
		cipher(input, rot);
}
