export const HOST =
  process.env.NEXT_PUBLIC_HOST || "http://localhost:5000/api/";
export const getPackages = HOST + "packages/get-packages";
export const addUser = HOST + "auth/add-user";
export const loginUser = HOST + "auth/login-user";
export const recoverEmail = HOST + "auth/recover-email/";
export const resetPassword = HOST + "auth/reset-password/";
export const getUserProfile = HOST + "auth/get-user-profile";
export const updateUserProfile = HOST + "auth/update-user-profile";
export const updateUserPackage = HOST + "auth/update-user-package/";
export const addPropertyPoint = HOST + "property/add-property";
export const getSellerProperties = HOST + "property/get-seller-properties";
export const deletePropertyPoint = HOST + "property/delete-property/";
export const getProperty = HOST + "property/get-property/";
export const updateProperty = HOST + "property/update-property/";
export const getProperties = HOST + "property/get-properties/";
export const searchProperties = HOST + "property/search-properties/";
