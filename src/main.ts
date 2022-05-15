import { findVersion } from "./findVersion";
import { setOutput } from "@actions/core";

const args = process.argv.slice(2)

const start = async () => {
    const release = await findVersion(args[0], args[1])
    setOutput('release', release.toString())
}

start()



