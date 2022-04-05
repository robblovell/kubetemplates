import { RoleHelper } from '@c6o/kubetempletes-resources/rbac/v1-helper'
import { Rule } from './objects'

export class Role extends RoleHelper {

    constructor(name, namespace, rules: Rule[] = []) {
        super(name, namespace)
        this.$rules(rules)
        return this
    }

    $rules(rules) {
        if (!this.rules) this.rules = []
        this.rules = [
            ...this.rules,
            ...rules.map(rule => rule.template)
        ]
        return this
    }
}
