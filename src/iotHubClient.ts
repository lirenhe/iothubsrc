import * as coreHttp from "@azure/core-http";
import {
  Operations,
  IotHubResource,
  ResourceProviderCommon,
  Certificates,
  IotHub,
  PrivateLinkResources,
  PrivateEndpointConnections
} from "./operations";
import { IotHubClientContext } from "./iotHubClientContext";
import { IotHubClientOptionalParams } from "./models";

export class IotHubClient extends IotHubClientContext {
  /**
   * Initializes a new instance of the IotHubClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: IotHubClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new Operations(this);
    this.iotHubResource = new IotHubResource(this);
    this.resourceProviderCommon = new ResourceProviderCommon(this);
    this.certificates = new Certificates(this);
    this.iotHub = new IotHub(this);
    this.privateLinkResources = new PrivateLinkResources(this);
    this.privateEndpointConnections = new PrivateEndpointConnections(this);
  }

  operations: Operations;
  iotHubResource: IotHubResource;
  resourceProviderCommon: ResourceProviderCommon;
  certificates: Certificates;
  iotHub: IotHub;
  privateLinkResources: PrivateLinkResources;
  privateEndpointConnections: PrivateEndpointConnections;
}
