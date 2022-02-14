export interface UserMutationResponse {
  code: number;
  success: boolean;
  message: string;
  user?: string;
  errors?: string;
}
