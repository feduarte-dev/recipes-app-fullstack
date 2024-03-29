export type ServiceResponseError = {
  status: 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'UNPROCESSABLE_ENTITY';
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
