import { ResourceTemplate, Template } from "../resourceTemplate";
import { CronJob, CronJobList, CronJobSpec, CronJobStatus, JobTemplateSpec } from "./v1beta1";
import { ListMeta, ObjectMeta, Time } from "../meta/v1";
import { ObjectReference } from "../core/v1";
import { JobSpec } from "./v1";

export interface CronJobHelper extends CronJob {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): CronJobHelper;
    spec: CronJobSpecHelper;
    $spec(x: CronJobSpecHelper): CronJobHelper;
    status: CronJobStatusHelper;
    $status(x: CronJobStatusHelper): CronJobHelper;
}

/** CronJob represents the configuration of a single cron job. */
export class CronJobHelper extends ResourceTemplate implements CronJobHelper {
    static kind = 'CronJob';
    static apiVersion = 'batch/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CronJobHelper.kind, CronJobHelper.apiVersion)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: CronJobSpecHelper;
    get spec(): CronJobSpecHelper {
        return this._spec
    }
    set spec(x: CronJobSpecHelper) {
        this._spec = x
    }
    $Spec(x: CronJobSpecHelper) {
        this.spec = x; return this
    }

    _status: CronJobStatusHelper;
    get status(): CronJobStatusHelper {
        return this._status
    }
    set status(x: CronJobStatusHelper) {
        this._status = x
    }
    $Status(x: CronJobStatusHelper) {
        this.status = x; return this
    }
}

export interface CronJobListHelper extends CronJobList {
    $items(x: Array<CronJob>): CronJobListHelper;
    metadata: ListMetaHelper;
    $metadata(x: ListMetaHelper): CronJobListHelper;
}

/** CronJobList is a collection of cron jobs. */
export class CronJobListHelper extends ResourceTemplate implements CronJobListHelper {
    static kind = 'CronJobList';
    static apiVersion = 'batch/v1beta1';

    constructor(nameOrObject: string | any, namespace: string, kind: string, apiVersion: string) {
        super(nameOrObject, namespace, CronJobListHelper.kind, CronJobListHelper.apiVersion)
    }

    _items: Array<CronJob>;
    get items(): Array<CronJob> {
        return this._items
    }
    set items(x: Array<CronJob>) {
        this._items = this.set(this.items, x)
    }
    $Items(x: Array<CronJob>) {
        this.items = x; return this
    }

    _metadata: ListMetaHelper;
    get metadata(): ListMetaHelper {
        return this._metadata
    }
    set metadata(x: ListMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ListMetaHelper) {
        this.metadata = x; return this
    }
}

export interface CronJobSpecHelper extends CronJobSpec {
    $concurrencyPolicy(x: string): CronJobSpecHelper;
    $failedJobsHistoryLimit(x: number): CronJobSpecHelper;
    jobTemplate: JobTemplateSpecHelper;
    $jobTemplate(x: JobTemplateSpecHelper): CronJobSpecHelper;
    $schedule(x: string): CronJobSpecHelper;
    $startingDeadlineSeconds(x: number): CronJobSpecHelper;
    $successfulJobsHistoryLimit(x: number): CronJobSpecHelper;
    $suspend(x: boolean): CronJobSpecHelper;
}

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export class CronJobSpecHelper extends Template implements CronJobSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _concurrencyPolicy: string;
    get concurrencyPolicy(): string {
        return this._concurrencyPolicy
    }
    set concurrencyPolicy(x: string) {
        this._concurrencyPolicy = x
    }
    $ConcurrencyPolicy(x: string) {
        this.concurrencyPolicy = x; return this
    }

    _failedJobsHistoryLimit: number;
    get failedJobsHistoryLimit(): number {
        return this._failedJobsHistoryLimit
    }
    set failedJobsHistoryLimit(x: number) {
        this._failedJobsHistoryLimit = x
    }
    $FailedJobsHistoryLimit(x: number) {
        this.failedJobsHistoryLimit = x; return this
    }

    _jobTemplate: JobTemplateSpecHelper;
    get jobTemplate(): JobTemplateSpecHelper {
        return this._jobTemplate
    }
    set jobTemplate(x: JobTemplateSpecHelper) {
        this._jobTemplate = x
    }
    $JobTemplate(x: JobTemplateSpecHelper) {
        this.jobTemplate = x; return this
    }

    _schedule: string;
    get schedule(): string {
        return this._schedule
    }
    set schedule(x: string) {
        this._schedule = x
    }
    $Schedule(x: string) {
        this.schedule = x; return this
    }

    _startingDeadlineSeconds: number;
    get startingDeadlineSeconds(): number {
        return this._startingDeadlineSeconds
    }
    set startingDeadlineSeconds(x: number) {
        this._startingDeadlineSeconds = x
    }
    $StartingDeadlineSeconds(x: number) {
        this.startingDeadlineSeconds = x; return this
    }

    _successfulJobsHistoryLimit: number;
    get successfulJobsHistoryLimit(): number {
        return this._successfulJobsHistoryLimit
    }
    set successfulJobsHistoryLimit(x: number) {
        this._successfulJobsHistoryLimit = x
    }
    $SuccessfulJobsHistoryLimit(x: number) {
        this.successfulJobsHistoryLimit = x; return this
    }

    _suspend: boolean;
    get suspend(): boolean {
        return this._suspend
    }
    set suspend(x: boolean) {
        this._suspend = x
    }
    $Suspend(x: boolean) {
        this.suspend = x; return this
    }
}

export interface CronJobStatusHelper extends CronJobStatus {
    $active(x: Array<ObjectReference>): CronJobStatusHelper;
    $lastScheduleTime(x: Time): CronJobStatusHelper;
    $lastSuccessfulTime(x: Time): CronJobStatusHelper;
}

/** CronJobStatus represents the current state of a cron job. */
export class CronJobStatusHelper extends Template implements CronJobStatusHelper {
    constructor(obj: any) {
        super(obj)
    }

    _active: Array<ObjectReference>;
    get active(): Array<ObjectReference> {
        return this._active
    }
    set active(x: Array<ObjectReference>) {
        this._active = this.set(this.active, x)
    }
    $Active(x: Array<ObjectReference>) {
        this.active = x; return this
    }

    _lastScheduleTime: Time;
    get lastScheduleTime(): Time {
        return this._lastScheduleTime
    }
    set lastScheduleTime(x: Time) {
        this._lastScheduleTime = x
    }
    $LastScheduleTime(x: Time) {
        this.lastScheduleTime = x; return this
    }

    _lastSuccessfulTime: Time;
    get lastSuccessfulTime(): Time {
        return this._lastSuccessfulTime
    }
    set lastSuccessfulTime(x: Time) {
        this._lastSuccessfulTime = x
    }
    $LastSuccessfulTime(x: Time) {
        this.lastSuccessfulTime = x; return this
    }
}

export interface JobTemplateSpecHelper extends JobTemplateSpec {
    metadata: ObjectMetaHelper;
    $metadata(x: ObjectMetaHelper): JobTemplateSpecHelper;
    spec: JobSpecHelper;
    $spec(x: JobSpecHelper): JobTemplateSpecHelper;
}

/** JobTemplateSpec describes the data a Job should have when created from a template */
export class JobTemplateSpecHelper extends Template implements JobTemplateSpecHelper {
    constructor(obj: any) {
        super(obj)
    }

    _metadata: ObjectMetaHelper;
    get metadata(): ObjectMetaHelper {
        return this._metadata
    }
    set metadata(x: ObjectMetaHelper) {
        this._metadata = x
    }
    $Metadata(x: ObjectMetaHelper) {
        this.metadata = x; return this
    }

    _spec: JobSpecHelper;
    get spec(): JobSpecHelper {
        return this._spec
    }
    set spec(x: JobSpecHelper) {
        this._spec = x
    }
    $Spec(x: JobSpecHelper) {
        this.spec = x; return this
    }
}
