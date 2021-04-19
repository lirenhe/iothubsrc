import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { IotHubClient } from "../iotHubClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  IotHubDescription,
  IotHubSkuDescription,
  EventHubConsumerGroupInfo,
  JobResponse,
  IotHubQuotaMetricInfo,
  EndpointHealthData,
  SharedAccessSignatureAuthorizationRule,
  IotHubResourceGetResponse,
  IotHubResourceCreateOrUpdateOptionalParams,
  IotHubResourceCreateOrUpdateResponse,
  TagsResource,
  IotHubResourceUpdateResponse,
  IotHubResourceDeleteResponse,
  IotHubResourceListBySubscriptionResponse,
  IotHubResourceListByResourceGroupResponse,
  IotHubResourceGetStatsResponse,
  IotHubResourceGetValidSkusResponse,
  IotHubResourceListEventHubConsumerGroupsResponse,
  IotHubResourceGetEventHubConsumerGroupResponse,
  EventHubConsumerGroupBodyDescription,
  IotHubResourceCreateEventHubConsumerGroupResponse,
  IotHubResourceListJobsResponse,
  IotHubResourceGetJobResponse,
  IotHubResourceGetQuotaMetricsResponse,
  IotHubResourceGetEndpointHealthResponse,
  OperationInputs,
  IotHubResourceCheckNameAvailabilityResponse,
  TestAllRoutesInput,
  IotHubResourceTestAllRoutesResponse,
  TestRouteInput,
  IotHubResourceTestRouteResponse,
  IotHubResourceListKeysResponse,
  IotHubResourceGetKeysForKeyNameResponse,
  ExportDevicesRequest,
  IotHubResourceExportDevicesResponse,
  ImportDevicesRequest,
  IotHubResourceImportDevicesResponse,
  IotHubResourceListBySubscriptionNextResponse,
  IotHubResourceListByResourceGroupNextResponse,
  IotHubResourceGetValidSkusNextResponse,
  IotHubResourceListEventHubConsumerGroupsNextResponse,
  IotHubResourceListJobsNextResponse,
  IotHubResourceGetQuotaMetricsNextResponse,
  IotHubResourceGetEndpointHealthNextResponse,
  IotHubResourceListKeysNextResponse
} from "../models";

/** Class representing a IotHubResource. */
export class IotHubResource {
  private readonly client: IotHubClient;

  /**
   * Initialize a new instance of the class IotHubResource class.
   * @param client Reference to the service client
   */
  constructor(client: IotHubClient) {
    this.client = client;
  }

  /**
   * Get all the IoT hubs in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<IotHubDescription> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubDescription[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubDescription> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the IoT hubs in a resource group.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<IotHubDescription> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubDescription[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubDescription> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the list of valid SKUs for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  public listValidSkus(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<IotHubSkuDescription> {
    const iter = this.getValidSkusPagingAll(
      resourceGroupName,
      resourceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getValidSkusPagingPage(
          resourceGroupName,
          resourceName,
          options
        );
      }
    };
  }

  private async *getValidSkusPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubSkuDescription[]> {
    let result = await this._getValidSkus(
      resourceGroupName,
      resourceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getValidSkusNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getValidSkusPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubSkuDescription> {
    for await (const page of this.getValidSkusPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
   * hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
   * @param options The options parameters.
   */
  public listEventHubConsumerGroups(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<EventHubConsumerGroupInfo> {
    const iter = this.listEventHubConsumerGroupsPagingAll(
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listEventHubConsumerGroupsPagingPage(
          resourceGroupName,
          resourceName,
          eventHubEndpointName,
          options
        );
      }
    };
  }

  private async *listEventHubConsumerGroupsPagingPage(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<EventHubConsumerGroupInfo[]> {
    let result = await this._listEventHubConsumerGroups(
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listEventHubConsumerGroupsNext(
        resourceGroupName,
        resourceName,
        eventHubEndpointName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listEventHubConsumerGroupsPagingAll(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<EventHubConsumerGroupInfo> {
    for await (const page of this.listEventHubConsumerGroupsPagingPage(
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of all the jobs in an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  public listJobs(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<JobResponse> {
    const iter = this.listJobsPagingAll(
      resourceGroupName,
      resourceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listJobsPagingPage(
          resourceGroupName,
          resourceName,
          options
        );
      }
    };
  }

  private async *listJobsPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<JobResponse[]> {
    let result = await this._listJobs(resourceGroupName, resourceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listJobsNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listJobsPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<JobResponse> {
    for await (const page of this.listJobsPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the quota metrics for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  public listQuotaMetrics(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<IotHubQuotaMetricInfo> {
    const iter = this.getQuotaMetricsPagingAll(
      resourceGroupName,
      resourceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getQuotaMetricsPagingPage(
          resourceGroupName,
          resourceName,
          options
        );
      }
    };
  }

  private async *getQuotaMetricsPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubQuotaMetricInfo[]> {
    let result = await this._getQuotaMetrics(
      resourceGroupName,
      resourceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getQuotaMetricsNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getQuotaMetricsPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<IotHubQuotaMetricInfo> {
    for await (const page of this.getQuotaMetricsPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the health for routing endpoints.
   * @param resourceGroupName
   * @param iotHubName
   * @param options The options parameters.
   */
  public listEndpointHealth(
    resourceGroupName: string,
    iotHubName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<EndpointHealthData> {
    const iter = this.getEndpointHealthPagingAll(
      resourceGroupName,
      iotHubName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getEndpointHealthPagingPage(
          resourceGroupName,
          iotHubName,
          options
        );
      }
    };
  }

  private async *getEndpointHealthPagingPage(
    resourceGroupName: string,
    iotHubName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<EndpointHealthData[]> {
    let result = await this._getEndpointHealth(
      resourceGroupName,
      iotHubName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getEndpointHealthNext(
        resourceGroupName,
        iotHubName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getEndpointHealthPagingAll(
    resourceGroupName: string,
    iotHubName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<EndpointHealthData> {
    for await (const page of this.getEndpointHealthPagingPage(
      resourceGroupName,
      iotHubName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the security metadata for an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  public listKeys(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<SharedAccessSignatureAuthorizationRule> {
    const iter = this.listKeysPagingAll(
      resourceGroupName,
      resourceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listKeysPagingPage(
          resourceGroupName,
          resourceName,
          options
        );
      }
    };
  }

  private async *listKeysPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SharedAccessSignatureAuthorizationRule[]> {
    let result = await this._listKeys(resourceGroupName, resourceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listKeysNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listKeysPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<SharedAccessSignatureAuthorizationRule> {
    for await (const page of this.listKeysPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the non-security related metadata of an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<IotHubResourceGetResponse>;
  }

  /**
   * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve
   * the IoT hub metadata and security metadata, and then combine them with the modified values in a new
   * body to update the IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param iotHubDescription The IoT hub metadata and security metadata.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    iotHubDescription: IotHubDescription,
    options?: IotHubResourceCreateOrUpdateOptionalParams
  ): Promise<LROPoller<IotHubResourceCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      iotHubDescription,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        IotHubResourceCreateOrUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
   * @param resourceGroupName Resource group identifier.
   * @param resourceName Name of iot hub to update.
   * @param iotHubTags Updated tag information to set into the iot hub instance.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    resourceName: string,
    iotHubTags: TagsResource,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<IotHubResourceUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      iotHubTags,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        IotHubResourceUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Delete an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<IotHubResourceDeleteResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        IotHubResourceDeleteResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Get all the IoT hubs in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListBySubscriptionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySubscriptionOperationSpec
    ) as Promise<IotHubResourceListBySubscriptionResponse>;
  }

  /**
   * Get all the IoT hubs in a resource group.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<IotHubResourceListByResourceGroupResponse>;
  }

  /**
   * Get the statistics from an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  getStats(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetStatsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getStatsOperationSpec
    ) as Promise<IotHubResourceGetStatsResponse>;
  }

  /**
   * Get the list of valid SKUs for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  private _getValidSkus(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetValidSkusResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getValidSkusOperationSpec
    ) as Promise<IotHubResourceGetValidSkusResponse>;
  }

  /**
   * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT
   * hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
   * @param options The options parameters.
   */
  private _listEventHubConsumerGroups(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListEventHubConsumerGroupsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listEventHubConsumerGroupsOperationSpec
    ) as Promise<IotHubResourceListEventHubConsumerGroupsResponse>;
  }

  /**
   * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
   * @param name The name of the consumer group to retrieve.
   * @param options The options parameters.
   */
  getEventHubConsumerGroup(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetEventHubConsumerGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getEventHubConsumerGroupOperationSpec
    ) as Promise<IotHubResourceGetEventHubConsumerGroupResponse>;
  }

  /**
   * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
   * @param name The name of the consumer group to add.
   * @param consumerGroupBody The consumer group to add.
   * @param options The options parameters.
   */
  createEventHubConsumerGroup(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    name: string,
    consumerGroupBody: EventHubConsumerGroupBodyDescription,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceCreateEventHubConsumerGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      name,
      consumerGroupBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createEventHubConsumerGroupOperationSpec
    ) as Promise<IotHubResourceCreateEventHubConsumerGroupResponse>;
  }

  /**
   * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
   * @param name The name of the consumer group to delete.
   * @param options The options parameters.
   */
  deleteEventHubConsumerGroup(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      name,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteEventHubConsumerGroupOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a list of all the jobs in an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  private _listJobs(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListJobsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listJobsOperationSpec
    ) as Promise<IotHubResourceListJobsResponse>;
  }

  /**
   * Get the details of a job from an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param jobId The job identifier.
   * @param options The options parameters.
   */
  getJob(
    resourceGroupName: string,
    resourceName: string,
    jobId: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetJobResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      jobId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getJobOperationSpec
    ) as Promise<IotHubResourceGetJobResponse>;
  }

  /**
   * Get the quota metrics for an IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  private _getQuotaMetrics(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetQuotaMetricsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getQuotaMetricsOperationSpec
    ) as Promise<IotHubResourceGetQuotaMetricsResponse>;
  }

  /**
   * Get the health for routing endpoints.
   * @param resourceGroupName
   * @param iotHubName
   * @param options The options parameters.
   */
  private _getEndpointHealth(
    resourceGroupName: string,
    iotHubName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetEndpointHealthResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      iotHubName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getEndpointHealthOperationSpec
    ) as Promise<IotHubResourceGetEndpointHealthResponse>;
  }

  /**
   * Check if an IoT hub name is available.
   * @param operationInputs Set the name parameter in the OperationInputs structure to the name of the
   *                        IoT hub to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    operationInputs: OperationInputs,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceCheckNameAvailabilityResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      operationInputs,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkNameAvailabilityOperationSpec
    ) as Promise<IotHubResourceCheckNameAvailabilityResponse>;
  }

  /**
   * Test all routes configured in this Iot Hub
   * @param iotHubName IotHub to be tested
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param input Input for testing all routes
   * @param options The options parameters.
   */
  testAllRoutes(
    iotHubName: string,
    resourceGroupName: string,
    input: TestAllRoutesInput,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceTestAllRoutesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      iotHubName,
      resourceGroupName,
      input,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      testAllRoutesOperationSpec
    ) as Promise<IotHubResourceTestAllRoutesResponse>;
  }

  /**
   * Test the new route for this Iot Hub
   * @param iotHubName IotHub to be tested
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param input Route that needs to be tested
   * @param options The options parameters.
   */
  testRoute(
    iotHubName: string,
    resourceGroupName: string,
    input: TestRouteInput,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceTestRouteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      iotHubName,
      resourceGroupName,
      input,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      testRouteOperationSpec
    ) as Promise<IotHubResourceTestRouteResponse>;
  }

  /**
   * Get the security metadata for an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  private _listKeys(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListKeysResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listKeysOperationSpec
    ) as Promise<IotHubResourceListKeysResponse>;
  }

  /**
   * Get a shared access policy by name from an IoT hub. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param keyName The name of the shared access policy.
   * @param options The options parameters.
   */
  getKeysForKeyName(
    resourceGroupName: string,
    resourceName: string,
    keyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetKeysForKeyNameResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      keyName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getKeysForKeyNameOperationSpec
    ) as Promise<IotHubResourceGetKeysForKeyNameResponse>;
  }

  /**
   * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob
   * container. For more information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param exportDevicesParameters The parameters that specify the export devices operation.
   * @param options The options parameters.
   */
  exportDevices(
    resourceGroupName: string,
    resourceName: string,
    exportDevicesParameters: ExportDevicesRequest,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceExportDevicesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      exportDevicesParameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      exportDevicesOperationSpec
    ) as Promise<IotHubResourceExportDevicesResponse>;
  }

  /**
   * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more
   * information, see:
   * https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param importDevicesParameters The parameters that specify the import devices operation.
   * @param options The options parameters.
   */
  importDevices(
    resourceGroupName: string,
    resourceName: string,
    importDevicesParameters: ImportDevicesRequest,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceImportDevicesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      importDevicesParameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      importDevicesOperationSpec
    ) as Promise<IotHubResourceImportDevicesResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListBySubscriptionNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySubscriptionNextOperationSpec
    ) as Promise<IotHubResourceListBySubscriptionNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<IotHubResourceListByResourceGroupNextResponse>;
  }

  /**
   * GetValidSkusNext
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param nextLink The nextLink from the previous successful call to the GetValidSkus method.
   * @param options The options parameters.
   */
  private _getValidSkusNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetValidSkusNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getValidSkusNextOperationSpec
    ) as Promise<IotHubResourceGetValidSkusNextResponse>;
  }

  /**
   * ListEventHubConsumerGroupsNext
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param eventHubEndpointName The name of the Event Hub-compatible endpoint.
   * @param nextLink The nextLink from the previous successful call to the ListEventHubConsumerGroups
   *                 method.
   * @param options The options parameters.
   */
  private _listEventHubConsumerGroupsNext(
    resourceGroupName: string,
    resourceName: string,
    eventHubEndpointName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListEventHubConsumerGroupsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      eventHubEndpointName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listEventHubConsumerGroupsNextOperationSpec
    ) as Promise<IotHubResourceListEventHubConsumerGroupsNextResponse>;
  }

  /**
   * ListJobsNext
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param nextLink The nextLink from the previous successful call to the ListJobs method.
   * @param options The options parameters.
   */
  private _listJobsNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListJobsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listJobsNextOperationSpec
    ) as Promise<IotHubResourceListJobsNextResponse>;
  }

  /**
   * GetQuotaMetricsNext
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param nextLink The nextLink from the previous successful call to the GetQuotaMetrics method.
   * @param options The options parameters.
   */
  private _getQuotaMetricsNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetQuotaMetricsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getQuotaMetricsNextOperationSpec
    ) as Promise<IotHubResourceGetQuotaMetricsNextResponse>;
  }

  /**
   * GetEndpointHealthNext
   * @param resourceGroupName
   * @param iotHubName
   * @param nextLink The nextLink from the previous successful call to the GetEndpointHealth method.
   * @param options The options parameters.
   */
  private _getEndpointHealthNext(
    resourceGroupName: string,
    iotHubName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceGetEndpointHealthNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      iotHubName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getEndpointHealthNextOperationSpec
    ) as Promise<IotHubResourceGetEndpointHealthNextResponse>;
  }

  /**
   * ListKeysNext
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param nextLink The nextLink from the previous successful call to the ListKeys method.
   * @param options The options parameters.
   */
  private _listKeysNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<IotHubResourceListKeysNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listKeysNextOperationSpec
    ) as Promise<IotHubResourceListKeysNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescription
    },
    201: {
      bodyMapper: Mappers.IotHubDescription
    },
    202: {
      bodyMapper: Mappers.IotHubDescription
    },
    204: {
      bodyMapper: Mappers.IotHubDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.iotHubDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescription
    },
    201: {
      bodyMapper: Mappers.IotHubDescription
    },
    202: {
      bodyMapper: Mappers.IotHubDescription
    },
    204: {
      bodyMapper: Mappers.IotHubDescription
    }
  },
  requestBody: Parameters.iotHubTags,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescription
    },
    201: {
      bodyMapper: Mappers.IotHubDescription
    },
    202: {
      bodyMapper: Mappers.IotHubDescription
    },
    204: {
      bodyMapper: Mappers.IotHubDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescriptionListResult
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
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getStatsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegistryStatistics
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getValidSkusOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubSkuDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listEventHubConsumerGroupsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventHubConsumerGroupsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.eventHubEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEventHubConsumerGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventHubConsumerGroupInfo
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.eventHubEndpointName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createEventHubConsumerGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EventHubConsumerGroupInfo
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.consumerGroupBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.eventHubEndpointName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteEventHubConsumerGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.eventHubEndpointName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listJobsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponseListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getJobOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.jobId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getQuotaMetricsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubQuotaMetricInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEndpointHealthOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routingEndpointsHealth",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointHealthDataListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.iotHubName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubNameAvailabilityInfo
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.operationInputs,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const testAllRoutesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testall",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TestAllRoutesResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.input,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.iotHubName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const testRouteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testnew",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TestRouteResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.input1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.iotHubName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listKeysOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessSignatureAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getKeysForKeyNameOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessSignatureAuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const exportDevicesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.exportDevicesParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const importDevicesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.importDevicesParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getValidSkusNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubSkuDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listEventHubConsumerGroupsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventHubConsumerGroupsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.eventHubEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listJobsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResponseListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getQuotaMetricsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotHubQuotaMetricInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEndpointHealthNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointHealthDataListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.iotHubName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedAccessSignatureAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
