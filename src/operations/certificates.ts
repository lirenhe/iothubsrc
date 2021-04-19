import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { IotHubClient } from "../iotHubClient";
import {
  CertificatesListByIotHubResponse,
  CertificatesGetResponse,
  CertificateDescription,
  CertificatesCreateOrUpdateOptionalParams,
  CertificatesCreateOrUpdateResponse,
  CertificatesGenerateVerificationCodeResponse,
  CertificateVerificationDescription,
  CertificatesVerifyResponse
} from "../models";

/** Class representing a Certificates. */
export class Certificates {
  private readonly client: IotHubClient;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: IotHubClient) {
    this.client = client;
  }

  /**
   * Returns the list of certificates.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  listByIotHub(
    resourceGroupName: string,
    resourceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesListByIotHubResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByIotHubOperationSpec
    ) as Promise<CertificatesListByIotHubResponse>;
  }

  /**
   * Returns the certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      certificateName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<CertificatesGetResponse>;
  }

  /**
   * Adds new or replaces existing certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param certificateDescription The certificate body.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    certificateDescription: CertificateDescription,
    options?: CertificatesCreateOrUpdateOptionalParams
  ): Promise<CertificatesCreateOrUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      certificateName,
      certificateDescription,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateOperationSpec
    ) as Promise<CertificatesCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing X509 certificate or does nothing if it does not exist.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      certificateName,
      ifMatch,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Generates verification code for proof of possession flow. The verification code will be used to
   * generate a leaf certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param options The options parameters.
   */
  generateVerificationCode(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesGenerateVerificationCodeResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      certificateName,
      ifMatch,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      generateVerificationCodeOperationSpec
    ) as Promise<CertificatesGenerateVerificationCodeResponse>;
  }

  /**
   * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying
   * pre uploaded certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param certificateVerificationBody The name of the certificate
   * @param options The options parameters.
   */
  verify(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    certificateVerificationBody: CertificateVerificationDescription,
    options?: coreHttp.OperationOptions
  ): Promise<CertificatesVerifyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      resourceName,
      certificateName,
      ifMatch,
      certificateVerificationBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      verifyOperationSpec
    ) as Promise<CertificatesVerifyResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByIotHubOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListDescription
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
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
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
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    201: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.certificateDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
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
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const generateVerificationCodeOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateWithNonceDescription
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
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const verifyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.certificateVerificationBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
