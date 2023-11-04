import { Logger } from './logger';
import fs from 'fs';
import path from 'path';

const pkg: { name: string, version: string, homepage: string } = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')).toString());
const log = new Logger(`${pkg.name} v${pkg.version} |`);

// Command line operation
if (require.main === module) {

	// Parse CLI args
	const args = process.argv.slice(2).reduce((acc, arg) => {
		const [key, value] = arg.split('=');
		acc[key.replaceAll('-', '')] = value;
		return acc;
	}, {} as Record<string, string>);

	const rotations: number | 'all' = args['r'] ? parseInt(args['r']) : 'all';

	log.info(`Rotations: ${rotations}`);
}
