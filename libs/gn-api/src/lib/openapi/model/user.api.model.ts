/**
 * GeoNetwork 4.0.0 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserSecurityApiModel } from './userSecurity.api.model'
import { GrantedAuthorityApiModel } from './grantedAuthority.api.model'
import { AddressApiModel } from './address.api.model'

export interface UserApiModel {
  surname?: string
  enabled?: boolean
  username?: string
  profile?: UserApiModel.ProfileEnum
  id?: number
  email?: string
  emailAddresses?: Set<string>
  addresses?: Set<AddressApiModel>
  primaryAddress?: AddressApiModel
  organisation?: string
  kind?: string
  security?: UserSecurityApiModel
  lastLoginDate?: string
  authorities?: Array<GrantedAuthorityApiModel>
  accountNonExpired?: boolean
  accountNonLocked?: boolean
  credentialsNonExpired?: boolean
  name?: string
}
export namespace UserApiModel {
  export type ProfileEnum =
    | 'Administrator'
    | 'UserAdmin'
    | 'Reviewer'
    | 'Editor'
    | 'RegisteredUser'
    | 'Guest'
    | 'Monitor'
  export const ProfileEnum = {
    Administrator: 'Administrator' as ProfileEnum,
    UserAdmin: 'UserAdmin' as ProfileEnum,
    Reviewer: 'Reviewer' as ProfileEnum,
    Editor: 'Editor' as ProfileEnum,
    RegisteredUser: 'RegisteredUser' as ProfileEnum,
    Guest: 'Guest' as ProfileEnum,
    Monitor: 'Monitor' as ProfileEnum,
  }
}
