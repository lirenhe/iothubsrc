import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { IotHubClient } from "../iotHubClient";
import { ResourceProviderCommonGetSubscriptionQuotaResponse } from "../models";

/** Class representing a ResourceProviderCommon. */
export class ResourceProviderCommon {
  private readonly client: IotHubClient;

  /**
   * Initialize a new instance of the class ResourceProviderCommon class.
   * @param client Reference to the service client
   */
  constructor(client: IotHubClient) {
    this.client = client;
  }

  /**
   * Get the number of free and paid iot hubs in the subscription
   * @param options The options parameters.
   */
  getSubscriptionQuota(
    options?: coreHttp.OperationOptions
  ): Promise<ResourceProviderCommonGetSubscriptionQuotaResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getSubscriptionQuotaOperationSpec
    ) as Promise<ResourceProviderCommonGetSubscriptionQuotaResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getSubscriptionQuotaOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserSubscriptionQuotaListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
