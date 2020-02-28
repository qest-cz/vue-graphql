export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  NonNegativeInt: any
  Upload: any
}

export type ArtistUser = User & {
  __typename?: 'ArtistUser'
  name: Scalars['String']
  avatar: Scalars['String']
  isArtist?: Maybe<Scalars['Boolean']>
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Comment = {
  __typename?: 'Comment'
  user: User
  text: Scalars['String']
}

export type CommentInput = {
  user: UserInput
  text: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  setLike: Song
  addComment: Song
}

export type MutationSetLikeArgs = {
  songId: Scalars['ID']
  like: Toggle
}

export type MutationAddCommentArgs = {
  songId: Scalars['ID']
  comment: CommentInput
}

export type Query = {
  __typename?: 'Query'
  song: Song
  songs: Array<Song>
  search: Array<Song>
}

export type QuerySongArgs = {
  id: Scalars['ID']
}

export type QuerySearchArgs = {
  name: Scalars['String']
}

export type RegularUser = User & {
  __typename?: 'RegularUser'
  name: Scalars['String']
  avatar: Scalars['String']
  isArtist?: Maybe<Scalars['Boolean']>
}

export type Song = {
  __typename?: 'Song'
  id: Scalars['ID']
  name: Scalars['String']
  artist: Scalars['String']
  cover: Scalars['String']
  description: Scalars['String']
  listens: Scalars['NonNegativeInt']
  tags: Array<Tag>
  audio?: Maybe<Scalars['String']>
  isLiked?: Maybe<Scalars['Boolean']>
  comments?: Maybe<Array<Comment>>
}

export type Subscription = {
  __typename?: 'Subscription'
  commentAdded: Comment
  listens: Scalars['NonNegativeInt']
}

export type SubscriptionCommentAddedArgs = {
  songId: Scalars['ID']
}

export type SubscriptionListensArgs = {
  songId: Scalars['ID']
}

export type Tag = {
  __typename?: 'Tag'
  value: Scalars['String']
  isImportant?: Maybe<Scalars['Boolean']>
}

export enum Toggle {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type User = {
  name: Scalars['String']
  avatar: Scalars['String']
  isArtist?: Maybe<Scalars['Boolean']>
}

export type UserInput = {
  name: Scalars['String']
  avatar: Scalars['String']
  isArtist?: Maybe<Scalars['Boolean']>
}

export type SetLikeMutationVariables = {
  add: Toggle
  songId: Scalars['ID']
}

export type SetLikeMutation = { __typename?: 'Mutation' } & {
  setLike: { __typename?: 'Song' } & Pick<Song, 'isLiked' | 'id'>
}
