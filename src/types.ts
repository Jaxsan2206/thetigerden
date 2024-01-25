import { Entry, EntrySkeletonType } from "contentful";

export type Content = Entry<EntrySkeletonType, undefined, string>

export interface IPageProps {
    content: Content[]
}
