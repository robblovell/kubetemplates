import { Resource, ResourceTemplate } from "@c6o/kubeclient-contracts";

/** Info contains versioning information. how we'll want to distribute that information. */
export class InfoHelper extends ResourceTemplate {
    static kind = 'Info';
    static apiVersion = 'version';

    buildDate(buildDate: string): InfoHelper {
        this._template.buildDate = buildDate
        return this
    }

    compiler(compiler: string): InfoHelper {
        this._template.compiler = compiler
        return this
    }

    gitCommit(gitCommit: string): InfoHelper {
        this._template.gitCommit = gitCommit
        return this
    }

    gitTreeState(gitTreeState: string): InfoHelper {
        this._template.gitTreeState = gitTreeState
        return this
    }

    gitVersion(gitVersion: string): InfoHelper {
        this._template.gitVersion = gitVersion
        return this
    }

    goVersion(goVersion: string): InfoHelper {
        this._template.goVersion = goVersion
        return this
    }

    major(major: string): InfoHelper {
        this._template.major = major
        return this
    }

    minor(minor: string): InfoHelper {
        this._template.minor = minor
        return this
    }

    platform(platform: string): InfoHelper {
        this._template.platform = platform
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this.kind = InfoHelper.kind
        this.apiVersion = InfoHelper.apiVersion
    }
}
