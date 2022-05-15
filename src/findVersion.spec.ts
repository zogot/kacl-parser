import { readFile } from 'node:fs/promises'
import { findVersion } from "./findVersion";
import {Changelog, parser} from "keep-a-changelog";

jest.mock('keep-a-changelog')
jest.mock('node:fs/promises')

describe('findVersion', () => {

    let findReleaseMock: jest.Mock

    beforeEach(() => {
        jest.clearAllMocks();

        findReleaseMock = jest.fn()
        const mockChangelog = {
            findRelease: findReleaseMock
        };

        (parser as jest.Mock).mockImplementation(() => mockChangelog)
    })

    it('should be exported and defined', () => {
        expect(findVersion).toBeDefined()
    })

    it("should call readFile from the fs library with the supplied filePath", async () => {
        await findVersion('/github/workspace/CHANGELOG.md', '1.0.0')
        expect(readFile).toHaveBeenCalledWith('/github/workspace/CHANGELOG.md', 'utf8')
    })

    it('should take the contents of that file and give to the parser', async () => {
        (readFile as jest.Mock).mockImplementation(() => "## [1.0.0] - 2022-05-15")

        await findVersion('/github/workspace/CHANGELOG.md', '1.0.0')
        expect(parser).toHaveBeenCalledWith('## [1.0.0] - 2022-05-15')
    })

    it('should findRelease for the supplied version', async () => {
        await findVersion('/github/workspace/CHANGELOG.md', '1.0.0')

        expect(findReleaseMock).toHaveBeenCalledWith('1.0.0')
    })

    it('should return empty string if undefined release', async () => {
        findReleaseMock.mockImplementation(() => undefined)

        const response = await findVersion('/github/workspace/CHANGELOG.md', '1.0.0')

        expect(response).toEqual('')
    })

    it('should return the contents of findRelease if it exists', async () => {
        const expectedResponse = '## 1.0.0 - 2022-05-15'
        findReleaseMock.mockImplementation(() => expectedResponse)

        const response = await findVersion('/path/CHANGELOG.md', '1.0.0')

        expect(response).toEqual(expectedResponse)
    })
})