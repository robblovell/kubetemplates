import { ResourceTemplate, Template } from "./resourceTemplate";
import { Info } from "./version";

export interface InfoHelper extends Info {
    $buildDate(x: string): InfoHelper;
    $compiler(x: string): InfoHelper;
    $gitCommit(x: string): InfoHelper;
    $gitTreeState(x: string): InfoHelper;
    $gitVersion(x: string): InfoHelper;
    $goVersion(x: string): InfoHelper;
    $major(x: string): InfoHelper;
    $minor(x: string): InfoHelper;
    $platform(x: string): InfoHelper;
}

/** Info contains versioning information. how we'll want to distribute that information. */
export class InfoHelper extends Template implements InfoHelper {
    constructor(obj: any) {
        super(obj)
    }

    _buildDate: string;
    get buildDate(): string {
        return this._buildDate
    }
    set buildDate(x: string) {
        this._buildDate = x
    }
    $BuildDate(x: string) {
        this.buildDate = x; return this
    }

    _compiler: string;
    get compiler(): string {
        return this._compiler
    }
    set compiler(x: string) {
        this._compiler = x
    }
    $Compiler(x: string) {
        this.compiler = x; return this
    }

    _gitCommit: string;
    get gitCommit(): string {
        return this._gitCommit
    }
    set gitCommit(x: string) {
        this._gitCommit = x
    }
    $GitCommit(x: string) {
        this.gitCommit = x; return this
    }

    _gitTreeState: string;
    get gitTreeState(): string {
        return this._gitTreeState
    }
    set gitTreeState(x: string) {
        this._gitTreeState = x
    }
    $GitTreeState(x: string) {
        this.gitTreeState = x; return this
    }

    _gitVersion: string;
    get gitVersion(): string {
        return this._gitVersion
    }
    set gitVersion(x: string) {
        this._gitVersion = x
    }
    $GitVersion(x: string) {
        this.gitVersion = x; return this
    }

    _goVersion: string;
    get goVersion(): string {
        return this._goVersion
    }
    set goVersion(x: string) {
        this._goVersion = x
    }
    $GoVersion(x: string) {
        this.goVersion = x; return this
    }

    _major: string;
    get major(): string {
        return this._major
    }
    set major(x: string) {
        this._major = x
    }
    $Major(x: string) {
        this.major = x; return this
    }

    _minor: string;
    get minor(): string {
        return this._minor
    }
    set minor(x: string) {
        this._minor = x
    }
    $Minor(x: string) {
        this.minor = x; return this
    }

    _platform: string;
    get platform(): string {
        return this._platform
    }
    set platform(x: string) {
        this._platform = x
    }
    $Platform(x: string) {
        this.platform = x; return this
    }
}
