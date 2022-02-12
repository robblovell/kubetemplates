import { ResourceTemplate } from "../resourceTemplate";
import { LabelSelector, ListMeta, ObjectMeta, Time } from "../meta/v1";
import { CronJob, CronJobSpec, CronJobStatus, Job, JobCondition, JobSpec, JobStatus, JobTemplateSpec } from "./v1";
import { ObjectReference, PodTemplateSpec } from "../core/v1";

/** CronJob represents the configuration of a single cron job. */
export class CronJobHelper extends ResourceTemplate {
    static kind = 'CronJob';
    static apiVersion = 'batch/v1';

    metadata(metadata: ObjectMeta): CronJobHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: CronJobSpec): CronJobHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: CronJobStatus): CronJobHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobHelper.kind
        this._template.apiVersion = CronJobHelper.apiVersion
    }
}

/** CronJobList is a collection of cron jobs. */
export class CronJobListHelper extends ResourceTemplate {
    static kind = 'CronJobList';
    static apiVersion = 'batch/v1';

    items(items: Array<CronJob>): CronJobListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): CronJobListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobListHelper.kind
        this._template.apiVersion = CronJobListHelper.apiVersion
    }
}

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export class CronJobSpecHelper extends ResourceTemplate {
    static kind = 'CronJobSpec';
    static apiVersion = 'batch/v1';

    concurrencyPolicy(concurrencyPolicy: string): CronJobSpecHelper {
        this._template.concurrencyPolicy = concurrencyPolicy
        return this
    }

    failedJobsHistoryLimit(failedJobsHistoryLimit: number): CronJobSpecHelper {
        this._template.failedJobsHistoryLimit = failedJobsHistoryLimit
        return this
    }

    jobTemplate(jobTemplate: JobTemplateSpec): CronJobSpecHelper {
        if (!this._template.jobTemplate) this._template.jobTemplate = []
        this._template.jobTemplate = {
            ...this._template.jobTemplate,
            ...jobTemplate
        }
        return this
    }

    schedule(schedule: string): CronJobSpecHelper {
        this._template.schedule = schedule
        return this
    }

    startingDeadlineSeconds(startingDeadlineSeconds: number): CronJobSpecHelper {
        this._template.startingDeadlineSeconds = startingDeadlineSeconds
        return this
    }

    successfulJobsHistoryLimit(successfulJobsHistoryLimit: number): CronJobSpecHelper {
        this._template.successfulJobsHistoryLimit = successfulJobsHistoryLimit
        return this
    }

    suspend(suspend: boolean): CronJobSpecHelper {
        this._template.suspend = suspend
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobSpecHelper.kind
        this._template.apiVersion = CronJobSpecHelper.apiVersion
    }
}

/** CronJobStatus represents the current state of a cron job. */
export class CronJobStatusHelper extends ResourceTemplate {
    static kind = 'CronJobStatus';
    static apiVersion = 'batch/v1';

    active(active: Array<ObjectReference>): CronJobStatusHelper {
        if (!Array.isArray(active)) { active = [active] }
        if (!this._template.active) this._template.active = active
        this._template.active = [...this._template.active, ...active]
        return this
    }

    lastScheduleTime(lastScheduleTime: Time): CronJobStatusHelper {
        this._template.lastScheduleTime = lastScheduleTime
        return this
    }

    lastSuccessfulTime(lastSuccessfulTime: Time): CronJobStatusHelper {
        this._template.lastSuccessfulTime = lastSuccessfulTime
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = CronJobStatusHelper.kind
        this._template.apiVersion = CronJobStatusHelper.apiVersion
    }
}

/** Job represents the configuration of a single job. */
export class JobHelper extends ResourceTemplate {
    static kind = 'Job';
    static apiVersion = 'batch/v1';

    metadata(metadata: ObjectMeta): JobHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: JobSpec): JobHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    status(status: JobStatus): JobHelper {
        if (!this._template.status) this._template.status = []
        this._template.status = {
            ...this._template.status,
            ...status
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = JobHelper.kind
        this._template.apiVersion = JobHelper.apiVersion
    }
}

/** JobCondition describes current state of a job. */
export class JobConditionHelper extends ResourceTemplate {
    static kind = 'JobCondition';
    static apiVersion = 'batch/v1';

    lastProbeTime(lastProbeTime: Time): JobConditionHelper {
        this._template.lastProbeTime = lastProbeTime
        return this
    }

    lastTransitionTime(lastTransitionTime: Time): JobConditionHelper {
        this._template.lastTransitionTime = lastTransitionTime
        return this
    }

    message(message: string): JobConditionHelper {
        this._template.message = message
        return this
    }

    reason(reason: string): JobConditionHelper {
        this._template.reason = reason
        return this
    }

    status(status: string): JobConditionHelper {
        this._template.status = status
        return this
    }

    type(type: string): JobConditionHelper {
        this._template.type = type
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = JobConditionHelper.kind
        this._template.apiVersion = JobConditionHelper.apiVersion
    }
}

/** JobList is a collection of jobs. */
export class JobListHelper extends ResourceTemplate {
    static kind = 'JobList';
    static apiVersion = 'batch/v1';

    items(items: Array<Job>): JobListHelper {
        if (!Array.isArray(items)) { items = [items] }
        if (!this._template.items) this._template.items = items
        this._template.items = [...this._template.items, ...items]
        return this
    }

    metadata(metadata: ListMeta): JobListHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = JobListHelper.kind
        this._template.apiVersion = JobListHelper.apiVersion
    }
}

/** JobSpec describes how the job execution will look like. */
export class JobSpecHelper extends ResourceTemplate {
    static kind = 'JobSpec';
    static apiVersion = 'batch/v1';

    activeDeadlineSeconds(activeDeadlineSeconds: number): JobSpecHelper {
        this._template.activeDeadlineSeconds = activeDeadlineSeconds
        return this
    }

    backoffLimit(backoffLimit: number): JobSpecHelper {
        this._template.backoffLimit = backoffLimit
        return this
    }

    completionMode(completionMode: string): JobSpecHelper {
        this._template.completionMode = completionMode
        return this
    }

    completions(completions: number): JobSpecHelper {
        this._template.completions = completions
        return this
    }

    manualSelector(manualSelector: boolean): JobSpecHelper {
        this._template.manualSelector = manualSelector
        return this
    }

    parallelism(parallelism: number): JobSpecHelper {
        this._template.parallelism = parallelism
        return this
    }

    selector(selector: LabelSelector): JobSpecHelper {
        if (!this._template.selector) this._template.selector = []
        this._template.selector = {
            ...this._template.selector,
            ...selector
        }
        return this
    }

    suspend(suspend: boolean): JobSpecHelper {
        this._template.suspend = suspend
        return this
    }

    template(template: PodTemplateSpec): JobSpecHelper {
        if (!this._template.template) this._template.template = []
        this._template.template = {
            ...this._template.template,
            ...template
        }
        return this
    }

    ttlSecondsAfterFinished(ttlSecondsAfterFinished: number): JobSpecHelper {
        this._template.ttlSecondsAfterFinished = ttlSecondsAfterFinished
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = JobSpecHelper.kind
        this._template.apiVersion = JobSpecHelper.apiVersion
    }
}

/** JobStatus represents the current state of a Job. */
export class JobStatusHelper extends ResourceTemplate {
    static kind = 'JobStatus';
    static apiVersion = 'batch/v1';

    active(active: number): JobStatusHelper {
        this._template.active = active
        return this
    }

    completedIndexes(completedIndexes: string): JobStatusHelper {
        this._template.completedIndexes = completedIndexes
        return this
    }

    completionTime(completionTime: Time): JobStatusHelper {
        this._template.completionTime = completionTime
        return this
    }

    conditions(conditions: Array<JobCondition>): JobStatusHelper {
        if (!Array.isArray(conditions)) { conditions = [conditions] }
        if (!this._template.conditions) this._template.conditions = conditions
        this._template.conditions = [...this._template.conditions, ...conditions]
        return this
    }

    failed(failed: number): JobStatusHelper {
        this._template.failed = failed
        return this
    }

    startTime(startTime: Time): JobStatusHelper {
        this._template.startTime = startTime
        return this
    }

    succeeded(succeeded: number): JobStatusHelper {
        this._template.succeeded = succeeded
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = JobStatusHelper.kind
        this._template.apiVersion = JobStatusHelper.apiVersion
    }
}

/** JobTemplateSpec describes the data a Job should have when created from a template */
export class JobTemplateSpecHelper extends ResourceTemplate {
    static kind = 'JobTemplateSpec';
    static apiVersion = 'batch/v1';

    metadata(metadata: ObjectMeta): JobTemplateSpecHelper {
        if (!this._template.metadata) this._template.metadata = []
        this._template.metadata = {
            ...this._template.metadata,
            ...metadata
        }
        return this
    }

    spec(spec: JobSpec): JobTemplateSpecHelper {
        if (!this._template.spec) this._template.spec = []
        this._template.spec = {
            ...this._template.spec,
            ...spec
        }
        return this
    }

    constructor(name, namespace) {
        super(name, namespace)
        this._template.kind = JobTemplateSpecHelper.kind
        this._template.apiVersion = JobTemplateSpecHelper.apiVersion
    }
}
