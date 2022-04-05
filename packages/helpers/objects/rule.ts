import { ResourceRuleHelper } from '@c6o/kubetempletes-resources/authorization/v1-helper'

export class Rule extends ResourceRuleHelper {
    constructor(resources = [], verbs = ['get', 'watch', 'list'], apiGroups = ['']) {
        super({
            apiGroups,
            resources,
            verbs,
        })
        return this
    }
}
