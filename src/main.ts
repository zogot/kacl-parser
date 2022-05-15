import {findVersion} from "./findVersion";
import * as os from "os";

const args = process.argv.slice(2)

const start = async () => {
    const release = await findVersion(args[0], args[1])
    process.stdout.write(`::set-output name=release::${release}` + os.EOL)
}

start()



