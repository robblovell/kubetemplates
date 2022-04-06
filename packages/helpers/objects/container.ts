import { ContainerHelper, VolumeMountHelper } from '@rel/kubetemplate-resources/core/v1-helper'

export class Container extends ContainerHelper {

    constructor(image, name = undefined, imagePullPolicy = undefined, ports: string[],
                // todo env and envfrom
                // envOrEnvFrom: Array<EnvVar> | Array<EnvFromSource> = null,
                volumeMounts: VolumeMountHelper[] = []) {
        super({
            image,
            imagePullPolicy: imagePullPolicy || 'never',
            name: name ?
                name : // if this is a deployment, use the deployment name.
                image, // if name doesn't exist, use the image name.
            ports,
            // [envOrEnvFrom. ? 'env' : 'envFrom']: envOrEnvFrom,
            volumeMounts,
        })

        return this
    }
}