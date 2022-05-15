import { parser } from "keep-a-changelog";
import { readFile } from 'node:fs/promises'

export async function findVersion(filePath: string, version: string): Promise<string> {
    const data = await readFile(filePath, 'utf8')
    return parser(data).findRelease(version)?.toString() || ''
}