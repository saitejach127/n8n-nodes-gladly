import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class Gladly implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Gladly',
        name: 'gladly',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Gladly API',
        defaults: {
            name: 'Gladly',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'gladlyApi',
                required: false,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://petstore3.swagger.io/api/v3',
        },
        properties: properties,
    };
}
