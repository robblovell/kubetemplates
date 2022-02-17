import { ResourceTemplate, Template } from "./resourceTemplate";
import { Info } from "./version";

export interface InfoHelper extends Info {
    $buildDate(x: any): any;
    $compiler(x: any): any;
    $gitCommit(x: any): any;
    $gitTreeState(x: any): any;
    $gitVersion(x: any): any;
    $goVersion(x: any): any;
    $major(x: any): any;
    $minor(x: any): any;
    $platform(x: any): any;
}

/** Info contains versioning information. how we'll want to distribute that information. */
export class InfoHelper extends Template implements InfoHelper {
    constructor(obj: any) {
        super(obj)
    }

    _buildDate: any;
    get buildDate(): any /*string*/ {
        return this._buildDate
    }
    set buildDate(x: any /*string*/) {
        this._buildDate = x
    }
    setBuildDate(x: any /*string*/) {
        this.buildDate = x; return this
    }

    _compiler: any;
    get compiler(): any /*string*/ {
        return this._compiler
    }
    set compiler(x: any /*string*/) {
        this._compiler = x
    }
    setCompiler(x: any /*string*/) {
        this.compiler = x; return this
    }

    _gitCommit: any;
    get gitCommit(): any /*string*/ {
        return this._gitCommit
    }
    set gitCommit(x: any /*string*/) {
        this._gitCommit = x
    }
    setGitCommit(x: any /*string*/) {
        this.gitCommit = x; return this
    }

    _gitTreeState: any;
    get gitTreeState(): any /*string*/ {
        return this._gitTreeState
    }
    set gitTreeState(x: any /*string*/) {
        this._gitTreeState = x
    }
    setGitTreeState(x: any /*string*/) {
        this.gitTreeState = x; return this
    }

    _gitVersion: any;
    get gitVersion(): any /*string*/ {
        return this._gitVersion
    }
    set gitVersion(x: any /*string*/) {
        this._gitVersion = x
    }
    setGitVersion(x: any /*string*/) {
        this.gitVersion = x; return this
    }

    _goVersion: any;
    get goVersion(): any /*string*/ {
        return this._goVersion
    }
    set goVersion(x: any /*string*/) {
        this._goVersion = x
    }
    setGoVersion(x: any /*string*/) {
        this.goVersion = x; return this
    }

    _major: any;
    get major(): any /*string*/ {
        return this._major
    }
    set major(x: any /*string*/) {
        this._major = x
    }
    setMajor(x: any /*string*/) {
        this.major = x; return this
    }

    _minor: any;
    get minor(): any /*string*/ {
        return this._minor
    }
    set minor(x: any /*string*/) {
        this._minor = x
    }
    setMinor(x: any /*string*/) {
        this.minor = x; return this
    }

    _platform: any;
    get platform(): any /*string*/ {
        return this._platform
    }
    set platform(x: any /*string*/) {
        this._platform = x
    }
    setPlatform(x: any /*string*/) {
        this.platform = x; return this
    }
}
