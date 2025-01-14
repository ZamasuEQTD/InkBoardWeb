export interface ApiResponse<T> {
  value: T
  error?:Failure
  isSuccess: boolean
  isFailure: boolean
}


export interface Failure {
  code:string
  description?:string
}
