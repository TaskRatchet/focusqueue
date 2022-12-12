/**
 * Trello
 * 1.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "https://trello.com/1",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "https://trello.com/1"
};
export type Actions = {
    text?: string;
};
export type ActionsText = {
    value?: string;
};
export type Boards = {
    closed?: string;
    desc?: string;
    idBoardSource?: string;
    idOrganization?: string;
    keepFromSource?: string;
    "labelNames/blue"?: string;
    "labelNames/green"?: string;
    "labelNames/orange"?: string;
    "labelNames/purple"?: string;
    "labelNames/red"?: string;
    "labelNames/yellow"?: string;
    name?: string;
    powerUps?: string;
    "prefs/background"?: string;
    "prefs/calendarFeedEnabled"?: string;
    "prefs/cardAging"?: string;
    "prefs/cardCovers"?: string;
    "prefs/comments"?: string;
    "prefs/invitations"?: string;
    "prefs/permissionLevel"?: string;
    "prefs/selfJoin"?: string;
    "prefs/voting"?: string;
    prefs_background?: string;
    prefs_cardAging?: string;
    prefs_cardCovers?: string;
    prefs_comments?: string;
    prefs_invitations?: string;
    prefs_permissionLevel?: string;
    prefs_selfJoin?: string;
    prefs_voting?: string;
    subscribed?: string;
};
export type BoardsChecklists = {
    name?: string;
};
export type BoardsClosed = {
    value?: string;
};
export type BoardsDesc = {
    value?: string;
};
export type BoardsIdOrganization = {
    value?: string;
};
export type LabelNamesBlue = {
    value?: string;
};
export type LabelNamesGreen = {
    value?: string;
};
export type LabelNamesOrange = {
    value?: string;
};
export type LabelNamesPurple = {
    value?: string;
};
export type LabelNamesRed = {
    value?: string;
};
export type LabelNamesYellow = {
    value?: string;
};
export type BoardsLabels = {
    color?: string;
    name?: string;
};
export type BoardsLists = {
    name?: string;
    pos?: string;
};
export type BoardsMembers = {
    email?: string;
    fullName?: string;
    "type"?: string;
};
export type BoardsMemberships = {
    member_fields?: string;
    "type"?: string;
};
export type MyPrefsEmailPosition = {
    value?: string;
};
export type MyPrefsIdEmailList = {
    value?: string;
};
export type MyPrefsShowListGuide = {
    value?: string;
};
export type MyPrefsShowSidebar = {
    value?: string;
};
export type MyPrefsShowSidebarActivity = {
    value?: string;
};
export type MyPrefsShowSidebarBoardActions = {
    value?: string;
};
export type MyPrefsShowSidebarMembers = {
    value?: string;
};
export type BoardsName = {
    value?: string;
};
export type BoardsPowerUps = {
    value?: string;
};
export type PrefsBackground = {
    value?: string;
};
export type PrefsCalendarFeedEnabled = {
    value?: string;
};
export type PrefsCardAging = {
    value?: string;
};
export type PrefsCardCovers = {
    value?: string;
};
export type PrefsComments = {
    value?: string;
};
export type PrefsInvitations = {
    value?: string;
};
export type PrefsPermissionLevel = {
    value?: string;
};
export type PrefsSelfJoin = {
    value?: string;
};
export type PrefsVoting = {
    value?: string;
};
export type BoardsSubscribed = {
    value?: string;
};
export type Cards = {
    closed?: string;
    desc?: string;
    due?: string;
    fileSource?: string;
    idAttachmentCover?: string;
    idBoard?: string;
    idCardSource?: string;
    idLabels?: string;
    idList?: string;
    idMembers?: string;
    keepFromSource?: string;
    labels?: string;
    name?: string;
    pos?: string;
    subscribed?: string;
    urlSource?: string;
};
export type ActionsComments = {
    text?: string;
};
export type CardsActionsComments = {
    text?: string;
};
export type CardsAttachments = {
    file?: string;
    mimeType?: string;
    name?: string;
    url?: string;
};
export type CardsChecklistIdChecklistCurrentCheckItem = {
    idChecklist?: string;
    name?: string;
    pos?: string;
    state?: string;
};
export type CardsChecklistCheckItem = {
    name?: string;
    pos?: string;
};
export type CardsChecklistCheckItemName = {
    value?: string;
};
export type CardsChecklistCheckItemPos = {
    value?: string;
};
export type CardsChecklistCheckItemState = {
    value?: string;
};
export type CardsChecklists = {
    idChecklistSource?: string;
    name?: string;
    value?: string;
};
export type CardsClosed = {
    value?: string;
};
export type CardsDesc = {
    value?: string;
};
export type CardsDue = {
    value?: string;
};
export type CardsIdAttachmentCover = {
    value?: string;
};
export type CardsIdBoard = {
    idList?: string;
    value?: string;
};
export type CardsIdLabels = {
    value?: string;
};
export type CardsIdList = {
    value?: string;
};
export type CardsIdMembers = {
    value?: string;
};
export type CardsLabels = {
    color?: string;
    name?: string;
    value?: string;
};
export type CardsMembersVoted = {
    value?: string;
};
export type CardsName = {
    value?: string;
};
export type CardsPos = {
    value?: string;
};
export type CardsStickers = {
    image?: string;
    left?: string;
    rotate?: string;
    top?: string;
    zIndex?: string;
};
export type CardsSubscribed = {
    value?: string;
};
export type Checklists = {
    idBoard?: string;
    idCard?: string;
    idChecklistSource?: string;
    name?: string;
    pos?: string;
};
export type ChecklistsCheckItems = {
    checked?: string;
    name?: string;
    pos?: string;
};
export type ChecklistsIdCard = {
    value?: string;
};
export type ChecklistsName = {
    value?: string;
};
export type ChecklistsPos = {
    value?: string;
};
export type Labels = {
    color?: string;
    idBoard?: string;
    name?: string;
};
export type LabelsColor = {
    value?: string;
};
export type LabelsName = {
    value?: string;
};
export type Lists = {
    closed?: string;
    idBoard?: string;
    idListSource?: string;
    name?: string;
    pos?: string;
    subscribed?: string;
};
export type ListsCards = {
    desc?: string;
    due?: string;
    idMembers?: string;
    labels?: string;
    name?: string;
};
export type ListsClosed = {
    value?: string;
};
export type ListsIdBoard = {
    pos?: string;
    value?: string;
};
export type ListsMoveAllCards = {
    idBoard?: string;
};
export type ListsName = {
    value?: string;
};
export type ListsPos = {
    value?: string;
};
export type ListsSubscribed = {
    value?: string;
};
export type Members = {
    avatarSource?: string;
    bio?: string;
    fullName?: string;
    initials?: string;
    "prefs/colorBlind"?: string;
    "prefs/locale"?: string;
    "prefs/minutesBetweenSummaries"?: string;
    username?: string;
};
export type MembersAvatar = {
    file?: string;
};
export type MembersAvatarSource = {
    value?: string;
};
export type MembersBio = {
    value?: string;
};
export type MembersBoardBackgrounds = {
    brightness?: string;
    file?: string;
    tile?: string;
};
export type MembersBoardStars = {
    idBoard?: string;
    pos?: string;
};
export type MembersBoardStarsIdBoard = {
    value?: string;
};
export type MembersBoardStarsPos = {
    value?: string;
};
export type MembersCustomBoardBackgrounds = {
    brightness?: string;
    file?: string;
    tile?: string;
};
export type MembersCustomEmoji = {
    file?: string;
    name?: string;
};
export type MembersCustomStickers = {
    file?: string;
};
export type MembersFullName = {
    value?: string;
};
export type MembersInitials = {
    value?: string;
};
export type MembersOneTimeMessagesDismissed = {
    value?: string;
};
export type PrefsColorBlind = {
    value?: string;
};
export type PrefsLocale = {
    value?: string;
};
export type PrefsMinutesBetweenSummaries = {
    value?: string;
};
export type MembersSavedSearches = {
    name?: string;
    pos?: string;
    query?: string;
};
export type MembersSavedSearchesName = {
    value?: string;
};
export type MembersSavedSearchesPos = {
    value?: string;
};
export type MembersSavedSearchesQuery = {
    value?: string;
};
export type MembersUsername = {
    value?: string;
};
export type Notifications = {
    unread?: string;
};
export type NotificationsUnread = {
    value?: string;
};
export type Organizations = {
    desc?: string;
    displayName?: string;
    name?: string;
    "prefs/associatedDomain"?: string;
    "prefs/boardVisibilityRestrict/org"?: string;
    "prefs/boardVisibilityRestrict/private"?: string;
    "prefs/boardVisibilityRestrict/public"?: string;
    "prefs/externalMembersDisabled"?: string;
    "prefs/googleAppsVersion"?: string;
    "prefs/orgInviteRestrict"?: string;
    "prefs/permissionLevel"?: string;
    website?: string;
};
export type OrganizationsDesc = {
    value?: string;
};
export type OrganizationsDisplayName = {
    value?: string;
};
export type OrganizationsLogo = {
    file?: string;
};
export type OrganizationsMembers = {
    email?: string;
    fullName?: string;
    "type"?: string;
};
export type OrganizationsMembersDeactivated = {
    value?: string;
};
export type OrganizationsMemberships = {
    member_fields?: string;
    "type"?: string;
};
export type OrganizationsName = {
    value?: string;
};
export type PrefsAssociatedDomain = {
    value?: string;
};
export type PrefsBoardVisibilityRestrict = {
    value?: string;
};
export type PrefsExternalMembersDisabled = {
    value?: string;
};
export type PrefsGoogleAppsVersion = {
    value?: string;
};
export type PrefsOrgInviteRestrict = {
    value?: string;
};
export type OrganizationsWebsite = {
    value?: string;
};
export type Sessions = {
    idBoard?: string;
    status?: string;
};
export type SessionsStatus = {
    value?: string;
};
export type TokensWebhooks = {
    callbackURL?: string;
    description?: string;
    idModel?: string;
};
export type Webhooks = {
    active?: string;
    callbackURL?: string;
    description?: string;
    idModel?: string;
};
export type WebhooksActive = {
    value?: string;
};
export type WebhooksCallbackUrl = {
    value?: string;
};
export type WebhooksDescription = {
    value?: string;
};
export type WebhooksIdModel = {
    value?: string;
};
/**
 * deleteActionsByIdAction()
 */
export function deleteActionsByIdAction(idAction: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getActionsByIdAction()
 */
export function getActionsByIdAction(idAction: string, key: string, token: string, { display, entities, fields, member, memberFields, memberCreator, memberCreatorFields }: {
    display?: string;
    entities?: string;
    fields?: string;
    member?: string;
    memberFields?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}${QS.query(QS.explode({
        display,
        entities,
        fields,
        member,
        member_fields: memberFields,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateActionsByIdAction()
 */
export function updateActionsByIdAction(idAction: string, key: string, token: string, actions: Actions, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: actions
    }));
}
/**
 * getActionsBoardByIdAction()
 */
export function getActionsBoardByIdAction(idAction: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/board${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsBoardByIdActionByField()
 */
export function getActionsBoardByIdActionByField(idAction: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/board/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsCardByIdAction()
 */
export function getActionsCardByIdAction(idAction: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/card${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsCardByIdActionByField()
 */
export function getActionsCardByIdActionByField(idAction: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/card/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsDisplayByIdAction()
 */
export function getActionsDisplayByIdAction(idAction: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/display${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsEntitiesByIdAction()
 */
export function getActionsEntitiesByIdAction(idAction: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/entities${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsListByIdAction()
 */
export function getActionsListByIdAction(idAction: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/list${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsListByIdActionByField()
 */
export function getActionsListByIdActionByField(idAction: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/list/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsMemberByIdAction()
 */
export function getActionsMemberByIdAction(idAction: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/member${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsMemberByIdActionByField()
 */
export function getActionsMemberByIdActionByField(idAction: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/member/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsMemberCreatorByIdAction()
 */
export function getActionsMemberCreatorByIdAction(idAction: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/memberCreator${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsMemberCreatorByIdActionByField()
 */
export function getActionsMemberCreatorByIdActionByField(idAction: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/memberCreator/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsOrganizationByIdAction()
 */
export function getActionsOrganizationByIdAction(idAction: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/organization${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getActionsOrganizationByIdActionByField()
 */
export function getActionsOrganizationByIdActionByField(idAction: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/organization/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateActionsTextByIdAction()
 */
export function updateActionsTextByIdAction(idAction: string, key: string, token: string, actionsText: ActionsText, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/text${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: actionsText
    }));
}
/**
 * getActionsByIdActionByField()
 */
export function getActionsByIdActionByField(idAction: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/actions/${encodeURIComponent(idAction)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBatch()
 */
export function getBatch(urls: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/batch${QS.query(QS.explode({
        urls,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addBoards()
 */
export function addBoards(key: string, token: string, boards: Boards, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: boards
    }));
}
/**
 * getBoardsByIdBoard()
 */
export function getBoardsByIdBoard(idBoard: string, key: string, token: string, { actions, actionsEntities, actionsDisplay, actionsFormat, actionsSince, actionsLimit, actionFields, actionMember, actionMemberFields, actionMemberCreator, actionMemberCreatorFields, cards, cardFields, cardAttachments, cardAttachmentFields, cardChecklists, cardStickers, boardStars, labels, labelFields, labelsLimit, lists, listFields, memberships, membershipsMember, membershipsMemberFields, members, memberFields, membersInvited, membersInvitedFields, checklists, checklistFields, organization, organizationFields, organizationMemberships, myPrefs, fields }: {
    actions?: string;
    actionsEntities?: string;
    actionsDisplay?: string;
    actionsFormat?: string;
    actionsSince?: string;
    actionsLimit?: string;
    actionFields?: string;
    actionMember?: string;
    actionMemberFields?: string;
    actionMemberCreator?: string;
    actionMemberCreatorFields?: string;
    cards?: string;
    cardFields?: string;
    cardAttachments?: string;
    cardAttachmentFields?: string;
    cardChecklists?: string;
    cardStickers?: string;
    boardStars?: string;
    labels?: string;
    labelFields?: string;
    labelsLimit?: string;
    lists?: string;
    listFields?: string;
    memberships?: string;
    membershipsMember?: string;
    membershipsMemberFields?: string;
    members?: string;
    memberFields?: string;
    membersInvited?: string;
    membersInvitedFields?: string;
    checklists?: string;
    checklistFields?: string;
    organization?: string;
    organizationFields?: string;
    organizationMemberships?: string;
    myPrefs?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}${QS.query(QS.explode({
        actions,
        actions_entities: actionsEntities,
        actions_display: actionsDisplay,
        actions_format: actionsFormat,
        actions_since: actionsSince,
        actions_limit: actionsLimit,
        action_fields: actionFields,
        action_member: actionMember,
        action_member_fields: actionMemberFields,
        action_memberCreator: actionMemberCreator,
        action_memberCreator_fields: actionMemberCreatorFields,
        cards,
        card_fields: cardFields,
        card_attachments: cardAttachments,
        card_attachment_fields: cardAttachmentFields,
        card_checklists: cardChecklists,
        card_stickers: cardStickers,
        boardStars,
        labels,
        label_fields: labelFields,
        labels_limit: labelsLimit,
        lists,
        list_fields: listFields,
        memberships,
        memberships_member: membershipsMember,
        memberships_member_fields: membershipsMemberFields,
        members,
        member_fields: memberFields,
        membersInvited,
        membersInvited_fields: membersInvitedFields,
        checklists,
        checklist_fields: checklistFields,
        organization,
        organization_fields: organizationFields,
        organization_memberships: organizationMemberships,
        myPrefs,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateBoardsByIdBoard()
 */
export function updateBoardsByIdBoard(idBoard: string, key: string, token: string, boards: Boards, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boards
    }));
}
/**
 * getBoardsActionsByIdBoard()
 */
export function getBoardsActionsByIdBoard(idBoard: string, key: string, token: string, { entities, display, filter, fields, limit, format, since, before, page, idModels, member, memberFields, memberCreator, memberCreatorFields }: {
    entities?: string;
    display?: string;
    filter?: string;
    fields?: string;
    limit?: string;
    format?: string;
    since?: string;
    before?: string;
    page?: string;
    idModels?: string;
    member?: string;
    memberFields?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/actions${QS.query(QS.explode({
        entities,
        display,
        filter,
        fields,
        limit,
        format,
        since,
        before,
        page,
        idModels,
        member,
        member_fields: memberFields,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsBoardStarsByIdBoard()
 */
export function getBoardsBoardStarsByIdBoard(idBoard: string, key: string, token: string, { filter }: {
    filter?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/boardStars${QS.query(QS.explode({
        filter,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addBoardsCalendarKeyGenerateByIdBoard()
 */
export function addBoardsCalendarKeyGenerateByIdBoard(idBoard: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/calendarKey/generate${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * getBoardsCardsByIdBoard()
 */
export function getBoardsCardsByIdBoard(idBoard: string, key: string, token: string, { actions, attachments, attachmentFields, stickers, members, memberFields, checkItemStates, checklists, limit, since, before, filter, fields }: {
    actions?: string;
    attachments?: string;
    attachmentFields?: string;
    stickers?: string;
    members?: string;
    memberFields?: string;
    checkItemStates?: string;
    checklists?: string;
    limit?: string;
    since?: string;
    before?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/cards${QS.query(QS.explode({
        actions,
        attachments,
        attachment_fields: attachmentFields,
        stickers,
        members,
        member_fields: memberFields,
        checkItemStates,
        checklists,
        limit,
        since,
        before,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsCardsByIdBoardByFilter()
 */
export function getBoardsCardsByIdBoardByFilter(idBoard: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/cards/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsCardsByIdBoardByIdCard()
 */
export function getBoardsCardsByIdBoardByIdCard(idBoard: string, idCard: string, key: string, token: string, { attachments, attachmentFields, actions, actionsEntities, actionsDisplay, actionsLimit, actionFields, actionMemberCreatorFields, members, memberFields, checkItemStates, checkItemStateFields, labels, checklists, checklistFields, fields }: {
    attachments?: string;
    attachmentFields?: string;
    actions?: string;
    actionsEntities?: string;
    actionsDisplay?: string;
    actionsLimit?: string;
    actionFields?: string;
    actionMemberCreatorFields?: string;
    members?: string;
    memberFields?: string;
    checkItemStates?: string;
    checkItemStateFields?: string;
    labels?: string;
    checklists?: string;
    checklistFields?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/cards/${encodeURIComponent(idCard)}${QS.query(QS.explode({
        attachments,
        attachment_fields: attachmentFields,
        actions,
        actions_entities: actionsEntities,
        actions_display: actionsDisplay,
        actions_limit: actionsLimit,
        action_fields: actionFields,
        action_memberCreator_fields: actionMemberCreatorFields,
        members,
        member_fields: memberFields,
        checkItemStates,
        checkItemState_fields: checkItemStateFields,
        labels,
        checklists,
        checklist_fields: checklistFields,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsChecklistsByIdBoard()
 */
export function getBoardsChecklistsByIdBoard(idBoard: string, key: string, token: string, { cards, cardFields, checkItems, checkItemFields, filter, fields }: {
    cards?: string;
    cardFields?: string;
    checkItems?: string;
    checkItemFields?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/checklists${QS.query(QS.explode({
        cards,
        card_fields: cardFields,
        checkItems,
        checkItem_fields: checkItemFields,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addBoardsChecklistsByIdBoard()
 */
export function addBoardsChecklistsByIdBoard(idBoard: string, key: string, token: string, boardsChecklists: BoardsChecklists, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/checklists${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: boardsChecklists
    }));
}
/**
 * updateBoardsClosedByIdBoard()
 */
export function updateBoardsClosedByIdBoard(idBoard: string, key: string, token: string, boardsClosed: BoardsClosed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/closed${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsClosed
    }));
}
/**
 * getBoardsDeltasByIdBoard()
 */
export function getBoardsDeltasByIdBoard(idBoard: string, tags: string, ixLastUpdate: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/deltas${QS.query(QS.explode({
        tags,
        ixLastUpdate,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateBoardsDescByIdBoard()
 */
export function updateBoardsDescByIdBoard(idBoard: string, key: string, token: string, boardsDesc: BoardsDesc, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/desc${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsDesc
    }));
}
/**
 * addBoardsEmailKeyGenerateByIdBoard()
 */
export function addBoardsEmailKeyGenerateByIdBoard(idBoard: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/emailKey/generate${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * updateBoardsIdOrganizationByIdBoard()
 */
export function updateBoardsIdOrganizationByIdBoard(idBoard: string, key: string, token: string, boardsIdOrganization: BoardsIdOrganization, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/idOrganization${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsIdOrganization
    }));
}
/**
 * updateBoardsLabelNamesBlueByIdBoard()
 */
export function updateBoardsLabelNamesBlueByIdBoard(idBoard: string, key: string, token: string, labelNamesBlue: LabelNamesBlue, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labelNames/blue${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelNamesBlue
    }));
}
/**
 * updateBoardsLabelNamesGreenByIdBoard()
 */
export function updateBoardsLabelNamesGreenByIdBoard(idBoard: string, key: string, token: string, labelNamesGreen: LabelNamesGreen, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labelNames/green${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelNamesGreen
    }));
}
/**
 * updateBoardsLabelNamesOrangeByIdBoard()
 */
export function updateBoardsLabelNamesOrangeByIdBoard(idBoard: string, key: string, token: string, labelNamesOrange: LabelNamesOrange, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labelNames/orange${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelNamesOrange
    }));
}
/**
 * updateBoardsLabelNamesPurpleByIdBoard()
 */
export function updateBoardsLabelNamesPurpleByIdBoard(idBoard: string, key: string, token: string, labelNamesPurple: LabelNamesPurple, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labelNames/purple${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelNamesPurple
    }));
}
/**
 * updateBoardsLabelNamesRedByIdBoard()
 */
export function updateBoardsLabelNamesRedByIdBoard(idBoard: string, key: string, token: string, labelNamesRed: LabelNamesRed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labelNames/red${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelNamesRed
    }));
}
/**
 * updateBoardsLabelNamesYellowByIdBoard()
 */
export function updateBoardsLabelNamesYellowByIdBoard(idBoard: string, key: string, token: string, labelNamesYellow: LabelNamesYellow, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labelNames/yellow${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelNamesYellow
    }));
}
/**
 * getBoardsLabelsByIdBoard()
 */
export function getBoardsLabelsByIdBoard(idBoard: string, key: string, token: string, { fields, limit }: {
    fields?: string;
    limit?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labels${QS.query(QS.explode({
        fields,
        limit,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addBoardsLabelsByIdBoard()
 */
export function addBoardsLabelsByIdBoard(idBoard: string, key: string, token: string, boardsLabels: BoardsLabels, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labels${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: boardsLabels
    }));
}
/**
 * getBoardsLabelsByIdBoardByIdLabel()
 */
export function getBoardsLabelsByIdBoardByIdLabel(idBoard: string, idLabel: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/labels/${encodeURIComponent(idLabel)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsListsByIdBoard()
 */
export function getBoardsListsByIdBoard(idBoard: string, key: string, token: string, { cards, cardFields, filter, fields }: {
    cards?: string;
    cardFields?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/lists${QS.query(QS.explode({
        cards,
        card_fields: cardFields,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addBoardsListsByIdBoard()
 */
export function addBoardsListsByIdBoard(idBoard: string, key: string, token: string, boardsLists: BoardsLists, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/lists${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: boardsLists
    }));
}
/**
 * getBoardsListsByIdBoardByFilter()
 */
export function getBoardsListsByIdBoardByFilter(idBoard: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/lists/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addBoardsMarkAsViewedByIdBoard()
 */
export function addBoardsMarkAsViewedByIdBoard(idBoard: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/markAsViewed${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * getBoardsMembersByIdBoard()
 */
export function getBoardsMembersByIdBoard(idBoard: string, key: string, token: string, { filter, fields, activity }: {
    filter?: string;
    fields?: string;
    activity?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/members${QS.query(QS.explode({
        filter,
        fields,
        activity,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateBoardsMembersByIdBoard()
 */
export function updateBoardsMembersByIdBoard(idBoard: string, key: string, token: string, boardsMembers: BoardsMembers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/members${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsMembers
    }));
}
/**
 * getBoardsMembersByIdBoardByFilter()
 */
export function getBoardsMembersByIdBoardByFilter(idBoard: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/members/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * deleteBoardsMembersByIdBoardByIdMember()
 */
export function deleteBoardsMembersByIdBoardByIdMember(idBoard: string, idMember: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/members/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateBoardsMembersByIdBoardByIdMember()
 */
export function updateBoardsMembersByIdBoardByIdMember(idBoard: string, idMember: string, key: string, token: string, boardsMembers: BoardsMembers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/members/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsMembers
    }));
}
/**
 * getBoardsMembersCardsByIdBoardByIdMember()
 */
export function getBoardsMembersCardsByIdBoardByIdMember(idBoard: string, idMember: string, key: string, token: string, { actions, attachments, attachmentFields, members, memberFields, checkItemStates, checklists, board, boardFields, list, listFields, filter, fields }: {
    actions?: string;
    attachments?: string;
    attachmentFields?: string;
    members?: string;
    memberFields?: string;
    checkItemStates?: string;
    checklists?: string;
    board?: string;
    boardFields?: string;
    list?: string;
    listFields?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/members/${encodeURIComponent(idMember)}/cards${QS.query(QS.explode({
        actions,
        attachments,
        attachment_fields: attachmentFields,
        members,
        member_fields: memberFields,
        checkItemStates,
        checklists,
        board,
        board_fields: boardFields,
        list,
        list_fields: listFields,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsMembersInvitedByIdBoard()
 */
export function getBoardsMembersInvitedByIdBoard(idBoard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/membersInvited${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsMembersInvitedByIdBoardByField()
 */
export function getBoardsMembersInvitedByIdBoardByField(idBoard: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/membersInvited/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsMembershipsByIdBoard()
 */
export function getBoardsMembershipsByIdBoard(idBoard: string, key: string, token: string, { filter, member, memberFields }: {
    filter?: string;
    member?: string;
    memberFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/memberships${QS.query(QS.explode({
        filter,
        member,
        member_fields: memberFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsMembershipsByIdBoardByIdMembership()
 */
export function getBoardsMembershipsByIdBoardByIdMembership(idBoard: string, idMembership: string, key: string, token: string, { member, memberFields }: {
    member?: string;
    memberFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/memberships/${encodeURIComponent(idMembership)}${QS.query(QS.explode({
        member,
        member_fields: memberFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateBoardsMembershipsByIdBoardByIdMembership()
 */
export function updateBoardsMembershipsByIdBoardByIdMembership(idBoard: string, idMembership: string, key: string, token: string, boardsMemberships: BoardsMemberships, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/memberships/${encodeURIComponent(idMembership)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsMemberships
    }));
}
/**
 * getBoardsMyPrefsByIdBoard()
 */
export function getBoardsMyPrefsByIdBoard(idBoard: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateBoardsMyPrefsEmailPositionByIdBoard()
 */
export function updateBoardsMyPrefsEmailPositionByIdBoard(idBoard: string, key: string, token: string, myPrefsEmailPosition: MyPrefsEmailPosition, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs/emailPosition${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: myPrefsEmailPosition
    }));
}
/**
 * updateBoardsMyPrefsIdEmailListByIdBoard()
 */
export function updateBoardsMyPrefsIdEmailListByIdBoard(idBoard: string, key: string, token: string, myPrefsIdEmailList: MyPrefsIdEmailList, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs/idEmailList${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: myPrefsIdEmailList
    }));
}
/**
 * updateBoardsMyPrefsShowListGuideByIdBoard()
 */
export function updateBoardsMyPrefsShowListGuideByIdBoard(idBoard: string, key: string, token: string, myPrefsShowListGuide: MyPrefsShowListGuide, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs/showListGuide${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: myPrefsShowListGuide
    }));
}
/**
 * updateBoardsMyPrefsShowSidebarByIdBoard()
 */
export function updateBoardsMyPrefsShowSidebarByIdBoard(idBoard: string, key: string, token: string, myPrefsShowSidebar: MyPrefsShowSidebar, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs/showSidebar${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: myPrefsShowSidebar
    }));
}
/**
 * updateBoardsMyPrefsShowSidebarActivityByIdBoard()
 */
export function updateBoardsMyPrefsShowSidebarActivityByIdBoard(idBoard: string, key: string, token: string, myPrefsShowSidebarActivity: MyPrefsShowSidebarActivity, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs/showSidebarActivity${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: myPrefsShowSidebarActivity
    }));
}
/**
 * updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()
 */
export function updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard(idBoard: string, key: string, token: string, myPrefsShowSidebarBoardActions: MyPrefsShowSidebarBoardActions, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs/showSidebarBoardActions${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: myPrefsShowSidebarBoardActions
    }));
}
/**
 * updateBoardsMyPrefsShowSidebarMembersByIdBoard()
 */
export function updateBoardsMyPrefsShowSidebarMembersByIdBoard(idBoard: string, key: string, token: string, myPrefsShowSidebarMembers: MyPrefsShowSidebarMembers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/myPrefs/showSidebarMembers${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: myPrefsShowSidebarMembers
    }));
}
/**
 * updateBoardsNameByIdBoard()
 */
export function updateBoardsNameByIdBoard(idBoard: string, key: string, token: string, boardsName: BoardsName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsName
    }));
}
/**
 * getBoardsOrganizationByIdBoard()
 */
export function getBoardsOrganizationByIdBoard(idBoard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/organization${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getBoardsOrganizationByIdBoardByField()
 */
export function getBoardsOrganizationByIdBoardByField(idBoard: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/organization/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addBoardsPowerUpsByIdBoard()
 */
export function addBoardsPowerUpsByIdBoard(idBoard: string, key: string, token: string, boardsPowerUps: BoardsPowerUps, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/powerUps${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: boardsPowerUps
    }));
}
/**
 * deleteBoardsPowerUpsByIdBoardByPowerUp()
 */
export function deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard: string, powerUp: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/powerUps/${encodeURIComponent(powerUp)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateBoardsPrefsBackgroundByIdBoard()
 */
export function updateBoardsPrefsBackgroundByIdBoard(idBoard: string, key: string, token: string, prefsBackground: PrefsBackground, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/background${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsBackground
    }));
}
/**
 * updateBoardsPrefsCalendarFeedEnabledByIdBoard()
 */
export function updateBoardsPrefsCalendarFeedEnabledByIdBoard(idBoard: string, key: string, token: string, prefsCalendarFeedEnabled: PrefsCalendarFeedEnabled, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/calendarFeedEnabled${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsCalendarFeedEnabled
    }));
}
/**
 * updateBoardsPrefsCardAgingByIdBoard()
 */
export function updateBoardsPrefsCardAgingByIdBoard(idBoard: string, key: string, token: string, prefsCardAging: PrefsCardAging, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/cardAging${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsCardAging
    }));
}
/**
 * updateBoardsPrefsCardCoversByIdBoard()
 */
export function updateBoardsPrefsCardCoversByIdBoard(idBoard: string, key: string, token: string, prefsCardCovers: PrefsCardCovers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/cardCovers${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsCardCovers
    }));
}
/**
 * updateBoardsPrefsCommentsByIdBoard()
 */
export function updateBoardsPrefsCommentsByIdBoard(idBoard: string, key: string, token: string, prefsComments: PrefsComments, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/comments${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsComments
    }));
}
/**
 * updateBoardsPrefsInvitationsByIdBoard()
 */
export function updateBoardsPrefsInvitationsByIdBoard(idBoard: string, key: string, token: string, prefsInvitations: PrefsInvitations, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/invitations${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsInvitations
    }));
}
/**
 * updateBoardsPrefsPermissionLevelByIdBoard()
 */
export function updateBoardsPrefsPermissionLevelByIdBoard(idBoard: string, key: string, token: string, prefsPermissionLevel: PrefsPermissionLevel, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/permissionLevel${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsPermissionLevel
    }));
}
/**
 * updateBoardsPrefsSelfJoinByIdBoard()
 */
export function updateBoardsPrefsSelfJoinByIdBoard(idBoard: string, key: string, token: string, prefsSelfJoin: PrefsSelfJoin, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/selfJoin${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsSelfJoin
    }));
}
/**
 * updateBoardsPrefsVotingByIdBoard()
 */
export function updateBoardsPrefsVotingByIdBoard(idBoard: string, key: string, token: string, prefsVoting: PrefsVoting, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/prefs/voting${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsVoting
    }));
}
/**
 * updateBoardsSubscribedByIdBoard()
 */
export function updateBoardsSubscribedByIdBoard(idBoard: string, key: string, token: string, boardsSubscribed: BoardsSubscribed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/subscribed${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: boardsSubscribed
    }));
}
/**
 * getBoardsByIdBoardByField()
 */
export function getBoardsByIdBoardByField(idBoard: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/boards/${encodeURIComponent(idBoard)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addCards()
 */
export function addCards(key: string, token: string, cards: Cards, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cards
    }));
}
/**
 * deleteCardsByIdCard()
 */
export function deleteCardsByIdCard(idCard: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getCardsByIdCard()
 */
export function getCardsByIdCard(idCard: string, key: string, token: string, { actions, actionsEntities, actionsDisplay, actionsLimit, actionFields, actionMemberCreatorFields, attachments, attachmentFields, members, memberFields, membersVoted, memberVotedFields, checkItemStates, checkItemStateFields, checklists, checklistFields, board, boardFields, list, listFields, stickers, stickerFields, fields }: {
    actions?: string;
    actionsEntities?: string;
    actionsDisplay?: string;
    actionsLimit?: string;
    actionFields?: string;
    actionMemberCreatorFields?: string;
    attachments?: string;
    attachmentFields?: string;
    members?: string;
    memberFields?: string;
    membersVoted?: string;
    memberVotedFields?: string;
    checkItemStates?: string;
    checkItemStateFields?: string;
    checklists?: string;
    checklistFields?: string;
    board?: string;
    boardFields?: string;
    list?: string;
    listFields?: string;
    stickers?: string;
    stickerFields?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}${QS.query(QS.explode({
        actions,
        actions_entities: actionsEntities,
        actions_display: actionsDisplay,
        actions_limit: actionsLimit,
        action_fields: actionFields,
        action_memberCreator_fields: actionMemberCreatorFields,
        attachments,
        attachment_fields: attachmentFields,
        members,
        member_fields: memberFields,
        membersVoted,
        memberVoted_fields: memberVotedFields,
        checkItemStates,
        checkItemState_fields: checkItemStateFields,
        checklists,
        checklist_fields: checklistFields,
        board,
        board_fields: boardFields,
        list,
        list_fields: listFields,
        stickers,
        sticker_fields: stickerFields,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateCardsByIdCard()
 */
export function updateCardsByIdCard(idCard: string, key: string, token: string, cards: Cards, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cards
    }));
}
/**
 * getCardsActionsByIdCard()
 */
export function getCardsActionsByIdCard(idCard: string, key: string, token: string, { entities, display, filter, fields, limit, format, since, before, page, idModels, member, memberFields, memberCreator, memberCreatorFields }: {
    entities?: string;
    display?: string;
    filter?: string;
    fields?: string;
    limit?: string;
    format?: string;
    since?: string;
    before?: string;
    page?: string;
    idModels?: string;
    member?: string;
    memberFields?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/actions${QS.query(QS.explode({
        entities,
        display,
        filter,
        fields,
        limit,
        format,
        since,
        before,
        page,
        idModels,
        member,
        member_fields: memberFields,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addCardsActionsCommentsByIdCard()
 */
export function addCardsActionsCommentsByIdCard(idCard: string, key: string, token: string, actionsComments: ActionsComments, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/actions/comments${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: actionsComments
    }));
}
/**
 * deleteCardsActionsCommentsByIdCardByIdAction()
 */
export function deleteCardsActionsCommentsByIdCardByIdAction(idCard: string, idAction: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/actions/${encodeURIComponent(idAction)}/comments${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateCardsActionsCommentsByIdCardByIdAction()
 */
export function updateCardsActionsCommentsByIdCardByIdAction(idCard: string, idAction: string, key: string, token: string, cardsActionsComments: CardsActionsComments, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/actions/${encodeURIComponent(idAction)}/comments${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsActionsComments
    }));
}
/**
 * getCardsAttachmentsByIdCard()
 */
export function getCardsAttachmentsByIdCard(idCard: string, key: string, token: string, { fields, filter }: {
    fields?: string;
    filter?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/attachments${QS.query(QS.explode({
        fields,
        filter,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addCardsAttachmentsByIdCard()
 */
export function addCardsAttachmentsByIdCard(idCard: string, key: string, token: string, cardsAttachments: CardsAttachments, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/attachments${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsAttachments
    }));
}
/**
 * deleteCardsAttachmentsByIdCardByIdAttachment()
 */
export function deleteCardsAttachmentsByIdCardByIdAttachment(idCard: string, idAttachment: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/attachments/${encodeURIComponent(idAttachment)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getCardsAttachmentsByIdCardByIdAttachment()
 */
export function getCardsAttachmentsByIdCardByIdAttachment(idCard: string, idAttachment: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/attachments/${encodeURIComponent(idAttachment)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getCardsBoardByIdCard()
 */
export function getCardsBoardByIdCard(idCard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/board${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getCardsBoardByIdCardByField()
 */
export function getCardsBoardByIdCardByField(idCard: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/board/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getCardsCheckItemStatesByIdCard()
 */
export function getCardsCheckItemStatesByIdCard(idCard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checkItemStates${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()
 */
export function updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard: string, idChecklistCurrent: string, idCheckItem: string, key: string, token: string, cardsChecklistIdChecklistCurrentCheckItem: CardsChecklistIdChecklistCurrentCheckItem, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklist/${encodeURIComponent(idChecklistCurrent)}/checkItem/${encodeURIComponent(idCheckItem)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsChecklistIdChecklistCurrentCheckItem
    }));
}
/**
 * addCardsChecklistCheckItemByIdCardByIdChecklist()
 */
export function addCardsChecklistCheckItemByIdCardByIdChecklist(idCard: string, idChecklist: string, key: string, token: string, cardsChecklistCheckItem: CardsChecklistCheckItem, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklist/${encodeURIComponent(idChecklist)}/checkItem${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsChecklistCheckItem
    }));
}
/**
 * deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()
 */
export function deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard: string, idChecklist: string, idCheckItem: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklist/${encodeURIComponent(idChecklist)}/checkItem/${encodeURIComponent(idCheckItem)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()
 */
export function addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard: string, idChecklist: string, idCheckItem: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklist/${encodeURIComponent(idChecklist)}/checkItem/${encodeURIComponent(idCheckItem)}/convertToCard${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()
 */
export function updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(idCard: string, idChecklist: string, idCheckItem: string, key: string, token: string, cardsChecklistCheckItemName: CardsChecklistCheckItemName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklist/${encodeURIComponent(idChecklist)}/checkItem/${encodeURIComponent(idCheckItem)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsChecklistCheckItemName
    }));
}
/**
 * updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()
 */
export function updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem(idCard: string, idChecklist: string, idCheckItem: string, key: string, token: string, cardsChecklistCheckItemPos: CardsChecklistCheckItemPos, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklist/${encodeURIComponent(idChecklist)}/checkItem/${encodeURIComponent(idCheckItem)}/pos${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsChecklistCheckItemPos
    }));
}
/**
 * updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()
 */
export function updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem(idCard: string, idChecklist: string, idCheckItem: string, key: string, token: string, cardsChecklistCheckItemState: CardsChecklistCheckItemState, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklist/${encodeURIComponent(idChecklist)}/checkItem/${encodeURIComponent(idCheckItem)}/state${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsChecklistCheckItemState
    }));
}
/**
 * getCardsChecklistsByIdCard()
 */
export function getCardsChecklistsByIdCard(idCard: string, key: string, token: string, { cards, cardFields, checkItems, checkItemFields, filter, fields }: {
    cards?: string;
    cardFields?: string;
    checkItems?: string;
    checkItemFields?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklists${QS.query(QS.explode({
        cards,
        card_fields: cardFields,
        checkItems,
        checkItem_fields: checkItemFields,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addCardsChecklistsByIdCard()
 */
export function addCardsChecklistsByIdCard(idCard: string, key: string, token: string, cardsChecklists: CardsChecklists, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklists${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsChecklists
    }));
}
/**
 * deleteCardsChecklistsByIdCardByIdChecklist()
 */
export function deleteCardsChecklistsByIdCardByIdChecklist(idCard: string, idChecklist: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/checklists/${encodeURIComponent(idChecklist)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateCardsClosedByIdCard()
 */
export function updateCardsClosedByIdCard(idCard: string, key: string, token: string, cardsClosed: CardsClosed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/closed${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsClosed
    }));
}
/**
 * updateCardsDescByIdCard()
 */
export function updateCardsDescByIdCard(idCard: string, key: string, token: string, cardsDesc: CardsDesc, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/desc${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsDesc
    }));
}
/**
 * updateCardsDueByIdCard()
 */
export function updateCardsDueByIdCard(idCard: string, key: string, token: string, cardsDue: CardsDue, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/due${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsDue
    }));
}
/**
 * updateCardsIdAttachmentCoverByIdCard()
 */
export function updateCardsIdAttachmentCoverByIdCard(idCard: string, key: string, token: string, cardsIdAttachmentCover: CardsIdAttachmentCover, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idAttachmentCover${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsIdAttachmentCover
    }));
}
/**
 * updateCardsIdBoardByIdCard()
 */
export function updateCardsIdBoardByIdCard(idCard: string, key: string, token: string, cardsIdBoard: CardsIdBoard, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idBoard${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsIdBoard
    }));
}
/**
 * addCardsIdLabelsByIdCard()
 */
export function addCardsIdLabelsByIdCard(idCard: string, key: string, token: string, cardsIdLabels: CardsIdLabels, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idLabels${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsIdLabels
    }));
}
/**
 * deleteCardsIdLabelsByIdCardByIdLabel()
 */
export function deleteCardsIdLabelsByIdCardByIdLabel(idCard: string, idLabel: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idLabels/${encodeURIComponent(idLabel)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateCardsIdListByIdCard()
 */
export function updateCardsIdListByIdCard(idCard: string, key: string, token: string, cardsIdList: CardsIdList, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idList${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsIdList
    }));
}
/**
 * addCardsIdMembersByIdCard()
 */
export function addCardsIdMembersByIdCard(idCard: string, key: string, token: string, cardsIdMembers: CardsIdMembers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idMembers${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsIdMembers
    }));
}
/**
 * updateCardsIdMembersByIdCard()
 */
export function updateCardsIdMembersByIdCard(idCard: string, key: string, token: string, cardsIdMembers: CardsIdMembers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idMembers${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsIdMembers
    }));
}
/**
 * deleteCardsIdMembersByIdCardByIdMember()
 */
export function deleteCardsIdMembersByIdCardByIdMember(idCard: string, idMember: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/idMembers/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * addCardsLabelsByIdCard()
 */
export function addCardsLabelsByIdCard(idCard: string, key: string, token: string, cardsLabels: CardsLabels, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/labels${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsLabels
    }));
}
/**
 * updateCardsLabelsByIdCard()
 */
export function updateCardsLabelsByIdCard(idCard: string, key: string, token: string, cardsLabels: CardsLabels, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/labels${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsLabels
    }));
}
/**
 * deleteCardsLabelsByIdCardByColor()
 */
export function deleteCardsLabelsByIdCardByColor(idCard: string, color: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/labels/${encodeURIComponent(color)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getCardsListByIdCard()
 */
export function getCardsListByIdCard(idCard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/list${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getCardsListByIdCardByField()
 */
export function getCardsListByIdCardByField(idCard: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/list/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addCardsMarkAssociatedNotificationsReadByIdCard()
 */
export function addCardsMarkAssociatedNotificationsReadByIdCard(idCard: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/markAssociatedNotificationsRead${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * getCardsMembersByIdCard()
 */
export function getCardsMembersByIdCard(idCard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/members${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getCardsMembersVotedByIdCard()
 */
export function getCardsMembersVotedByIdCard(idCard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/membersVoted${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addCardsMembersVotedByIdCard()
 */
export function addCardsMembersVotedByIdCard(idCard: string, key: string, token: string, cardsMembersVoted: CardsMembersVoted, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/membersVoted${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsMembersVoted
    }));
}
/**
 * deleteCardsMembersVotedByIdCardByIdMember()
 */
export function deleteCardsMembersVotedByIdCardByIdMember(idCard: string, idMember: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/membersVoted/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateCardsNameByIdCard()
 */
export function updateCardsNameByIdCard(idCard: string, key: string, token: string, cardsName: CardsName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsName
    }));
}
/**
 * updateCardsPosByIdCard()
 */
export function updateCardsPosByIdCard(idCard: string, key: string, token: string, cardsPos: CardsPos, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/pos${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsPos
    }));
}
/**
 * getCardsStickersByIdCard()
 */
export function getCardsStickersByIdCard(idCard: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/stickers${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addCardsStickersByIdCard()
 */
export function addCardsStickersByIdCard(idCard: string, key: string, token: string, cardsStickers: CardsStickers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/stickers${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: cardsStickers
    }));
}
/**
 * deleteCardsStickersByIdCardByIdSticker()
 */
export function deleteCardsStickersByIdCardByIdSticker(idCard: string, idSticker: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/stickers/${encodeURIComponent(idSticker)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getCardsStickersByIdCardByIdSticker()
 */
export function getCardsStickersByIdCardByIdSticker(idCard: string, idSticker: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/stickers/${encodeURIComponent(idSticker)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateCardsStickersByIdCardByIdSticker()
 */
export function updateCardsStickersByIdCardByIdSticker(idCard: string, idSticker: string, key: string, token: string, cardsStickers: CardsStickers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/stickers/${encodeURIComponent(idSticker)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsStickers
    }));
}
/**
 * updateCardsSubscribedByIdCard()
 */
export function updateCardsSubscribedByIdCard(idCard: string, key: string, token: string, cardsSubscribed: CardsSubscribed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/subscribed${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cardsSubscribed
    }));
}
/**
 * getCardsByIdCardByField()
 */
export function getCardsByIdCardByField(idCard: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/cards/${encodeURIComponent(idCard)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addChecklists()
 */
export function addChecklists(key: string, token: string, checklists: Checklists, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: checklists
    }));
}
/**
 * deleteChecklistsByIdChecklist()
 */
export function deleteChecklistsByIdChecklist(idChecklist: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getChecklistsByIdChecklist()
 */
export function getChecklistsByIdChecklist(idChecklist: string, key: string, token: string, { cards, cardFields, checkItems, checkItemFields, fields }: {
    cards?: string;
    cardFields?: string;
    checkItems?: string;
    checkItemFields?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}${QS.query(QS.explode({
        cards,
        card_fields: cardFields,
        checkItems,
        checkItem_fields: checkItemFields,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateChecklistsByIdChecklist()
 */
export function updateChecklistsByIdChecklist(idChecklist: string, key: string, token: string, checklists: Checklists, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: checklists
    }));
}
/**
 * getChecklistsBoardByIdChecklist()
 */
export function getChecklistsBoardByIdChecklist(idChecklist: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/board${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getChecklistsBoardByIdChecklistByField()
 */
export function getChecklistsBoardByIdChecklistByField(idChecklist: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/board/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getChecklistsCardsByIdChecklist()
 */
export function getChecklistsCardsByIdChecklist(idChecklist: string, key: string, token: string, { actions, attachments, attachmentFields, stickers, members, memberFields, checkItemStates, checklists, limit, since, before, filter, fields }: {
    actions?: string;
    attachments?: string;
    attachmentFields?: string;
    stickers?: string;
    members?: string;
    memberFields?: string;
    checkItemStates?: string;
    checklists?: string;
    limit?: string;
    since?: string;
    before?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/cards${QS.query(QS.explode({
        actions,
        attachments,
        attachment_fields: attachmentFields,
        stickers,
        members,
        member_fields: memberFields,
        checkItemStates,
        checklists,
        limit,
        since,
        before,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getChecklistsCardsByIdChecklistByFilter()
 */
export function getChecklistsCardsByIdChecklistByFilter(idChecklist: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/cards/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getChecklistsCheckItemsByIdChecklist()
 */
export function getChecklistsCheckItemsByIdChecklist(idChecklist: string, key: string, token: string, { filter, fields }: {
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/checkItems${QS.query(QS.explode({
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addChecklistsCheckItemsByIdChecklist()
 */
export function addChecklistsCheckItemsByIdChecklist(idChecklist: string, key: string, token: string, checklistsCheckItems: ChecklistsCheckItems, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/checkItems${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: checklistsCheckItems
    }));
}
/**
 * deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()
 */
export function deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(idChecklist: string, idCheckItem: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/checkItems/${encodeURIComponent(idCheckItem)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getChecklistsCheckItemsByIdChecklistByIdCheckItem()
 */
export function getChecklistsCheckItemsByIdChecklistByIdCheckItem(idChecklist: string, idCheckItem: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/checkItems/${encodeURIComponent(idCheckItem)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateChecklistsIdCardByIdChecklist()
 */
export function updateChecklistsIdCardByIdChecklist(idChecklist: string, key: string, token: string, checklistsIdCard: ChecklistsIdCard, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/idCard${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: checklistsIdCard
    }));
}
/**
 * updateChecklistsNameByIdChecklist()
 */
export function updateChecklistsNameByIdChecklist(idChecklist: string, key: string, token: string, checklistsName: ChecklistsName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: checklistsName
    }));
}
/**
 * updateChecklistsPosByIdChecklist()
 */
export function updateChecklistsPosByIdChecklist(idChecklist: string, key: string, token: string, checklistsPos: ChecklistsPos, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/pos${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: checklistsPos
    }));
}
/**
 * getChecklistsByIdChecklistByField()
 */
export function getChecklistsByIdChecklistByField(idChecklist: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/checklists/${encodeURIComponent(idChecklist)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addLabels()
 */
export function addLabels(key: string, token: string, labels: Labels, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: labels
    }));
}
/**
 * deleteLabelsByIdLabel()
 */
export function deleteLabelsByIdLabel(idLabel: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels/${encodeURIComponent(idLabel)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getLabelsByIdLabel()
 */
export function getLabelsByIdLabel(idLabel: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels/${encodeURIComponent(idLabel)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateLabelsByIdLabel()
 */
export function updateLabelsByIdLabel(idLabel: string, key: string, token: string, labels: Labels, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels/${encodeURIComponent(idLabel)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labels
    }));
}
/**
 * getLabelsBoardByIdLabel()
 */
export function getLabelsBoardByIdLabel(idLabel: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels/${encodeURIComponent(idLabel)}/board${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getLabelsBoardByIdLabelByField()
 */
export function getLabelsBoardByIdLabelByField(idLabel: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels/${encodeURIComponent(idLabel)}/board/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateLabelsColorByIdLabel()
 */
export function updateLabelsColorByIdLabel(idLabel: string, key: string, token: string, labelsColor: LabelsColor, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels/${encodeURIComponent(idLabel)}/color${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelsColor
    }));
}
/**
 * updateLabelsNameByIdLabel()
 */
export function updateLabelsNameByIdLabel(idLabel: string, key: string, token: string, labelsName: LabelsName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/labels/${encodeURIComponent(idLabel)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: labelsName
    }));
}
/**
 * addLists()
 */
export function addLists(key: string, token: string, lists: Lists, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: lists
    }));
}
/**
 * getListsByIdList()
 */
export function getListsByIdList(idList: string, key: string, token: string, { cards, cardFields, board, boardFields, fields }: {
    cards?: string;
    cardFields?: string;
    board?: string;
    boardFields?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}${QS.query(QS.explode({
        cards,
        card_fields: cardFields,
        board,
        board_fields: boardFields,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateListsByIdList()
 */
export function updateListsByIdList(idList: string, key: string, token: string, lists: Lists, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: lists
    }));
}
/**
 * getListsActionsByIdList()
 */
export function getListsActionsByIdList(idList: string, key: string, token: string, { entities, display, filter, fields, limit, format, since, before, page, idModels, member, memberFields, memberCreator, memberCreatorFields }: {
    entities?: string;
    display?: string;
    filter?: string;
    fields?: string;
    limit?: string;
    format?: string;
    since?: string;
    before?: string;
    page?: string;
    idModels?: string;
    member?: string;
    memberFields?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/actions${QS.query(QS.explode({
        entities,
        display,
        filter,
        fields,
        limit,
        format,
        since,
        before,
        page,
        idModels,
        member,
        member_fields: memberFields,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addListsArchiveAllCardsByIdList()
 */
export function addListsArchiveAllCardsByIdList(idList: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/archiveAllCards${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * getListsBoardByIdList()
 */
export function getListsBoardByIdList(idList: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/board${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getListsBoardByIdListByField()
 */
export function getListsBoardByIdListByField(idList: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/board/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getListsCardsByIdList()
 */
export function getListsCardsByIdList(idList: string, key: string, token: string, { actions, attachments, attachmentFields, stickers, members, memberFields, checkItemStates, checklists, limit, since, before, filter, fields }: {
    actions?: string;
    attachments?: string;
    attachmentFields?: string;
    stickers?: string;
    members?: string;
    memberFields?: string;
    checkItemStates?: string;
    checklists?: string;
    limit?: string;
    since?: string;
    before?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/cards${QS.query(QS.explode({
        actions,
        attachments,
        attachment_fields: attachmentFields,
        stickers,
        members,
        member_fields: memberFields,
        checkItemStates,
        checklists,
        limit,
        since,
        before,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addListsCardsByIdList()
 */
export function addListsCardsByIdList(idList: string, key: string, token: string, listsCards: ListsCards, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/cards${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: listsCards
    }));
}
/**
 * getListsCardsByIdListByFilter()
 */
export function getListsCardsByIdListByFilter(idList: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/cards/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateListsClosedByIdList()
 */
export function updateListsClosedByIdList(idList: string, key: string, token: string, listsClosed: ListsClosed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/closed${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: listsClosed
    }));
}
/**
 * updateListsIdBoardByIdList()
 */
export function updateListsIdBoardByIdList(idList: string, key: string, token: string, listsIdBoard: ListsIdBoard, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/idBoard${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: listsIdBoard
    }));
}
/**
 * addListsMoveAllCardsByIdList()
 */
export function addListsMoveAllCardsByIdList(idList: string, key: string, token: string, listsMoveAllCards: ListsMoveAllCards, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/moveAllCards${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: listsMoveAllCards
    }));
}
/**
 * updateListsNameByIdList()
 */
export function updateListsNameByIdList(idList: string, key: string, token: string, listsName: ListsName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: listsName
    }));
}
/**
 * updateListsPosByIdList()
 */
export function updateListsPosByIdList(idList: string, key: string, token: string, listsPos: ListsPos, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/pos${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: listsPos
    }));
}
/**
 * updateListsSubscribedByIdList()
 */
export function updateListsSubscribedByIdList(idList: string, key: string, token: string, listsSubscribed: ListsSubscribed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/subscribed${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: listsSubscribed
    }));
}
/**
 * getListsByIdListByField()
 */
export function getListsByIdListByField(idList: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/lists/${encodeURIComponent(idList)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersByIdMember()
 */
export function getMembersByIdMember(idMember: string, key: string, token: string, { actions, actionsEntities, actionsDisplay, actionsLimit, actionFields, actionSince, actionBefore, cards, cardFields, cardMembers, cardMemberFields, cardAttachments, cardAttachmentFields, cardStickers, boards, boardFields, boardActions, boardActionsEntities, boardActionsDisplay, boardActionsFormat, boardActionsSince, boardActionsLimit, boardActionFields, boardLists, boardMemberships, boardOrganization, boardOrganizationFields, boardsInvited, boardsInvitedFields, boardStars, savedSearches, organizations, organizationFields, organizationPaidAccount, organizationsInvited, organizationsInvitedFields, notifications, notificationsEntities, notificationsDisplay, notificationsLimit, notificationFields, notificationMemberCreator, notificationMemberCreatorFields, notificationBefore, notificationSince, tokens, paidAccount, boardBackgrounds, customBoardBackgrounds, customStickers, customEmoji, fields }: {
    actions?: string;
    actionsEntities?: string;
    actionsDisplay?: string;
    actionsLimit?: string;
    actionFields?: string;
    actionSince?: string;
    actionBefore?: string;
    cards?: string;
    cardFields?: string;
    cardMembers?: string;
    cardMemberFields?: string;
    cardAttachments?: string;
    cardAttachmentFields?: string;
    cardStickers?: string;
    boards?: string;
    boardFields?: string;
    boardActions?: string;
    boardActionsEntities?: string;
    boardActionsDisplay?: string;
    boardActionsFormat?: string;
    boardActionsSince?: string;
    boardActionsLimit?: string;
    boardActionFields?: string;
    boardLists?: string;
    boardMemberships?: string;
    boardOrganization?: string;
    boardOrganizationFields?: string;
    boardsInvited?: string;
    boardsInvitedFields?: string;
    boardStars?: string;
    savedSearches?: string;
    organizations?: string;
    organizationFields?: string;
    organizationPaidAccount?: string;
    organizationsInvited?: string;
    organizationsInvitedFields?: string;
    notifications?: string;
    notificationsEntities?: string;
    notificationsDisplay?: string;
    notificationsLimit?: string;
    notificationFields?: string;
    notificationMemberCreator?: string;
    notificationMemberCreatorFields?: string;
    notificationBefore?: string;
    notificationSince?: string;
    tokens?: string;
    paidAccount?: string;
    boardBackgrounds?: string;
    customBoardBackgrounds?: string;
    customStickers?: string;
    customEmoji?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        actions,
        actions_entities: actionsEntities,
        actions_display: actionsDisplay,
        actions_limit: actionsLimit,
        action_fields: actionFields,
        action_since: actionSince,
        action_before: actionBefore,
        cards,
        card_fields: cardFields,
        card_members: cardMembers,
        card_member_fields: cardMemberFields,
        card_attachments: cardAttachments,
        card_attachment_fields: cardAttachmentFields,
        card_stickers: cardStickers,
        boards,
        board_fields: boardFields,
        board_actions: boardActions,
        board_actions_entities: boardActionsEntities,
        board_actions_display: boardActionsDisplay,
        board_actions_format: boardActionsFormat,
        board_actions_since: boardActionsSince,
        board_actions_limit: boardActionsLimit,
        board_action_fields: boardActionFields,
        board_lists: boardLists,
        board_memberships: boardMemberships,
        board_organization: boardOrganization,
        board_organization_fields: boardOrganizationFields,
        boardsInvited,
        boardsInvited_fields: boardsInvitedFields,
        boardStars,
        savedSearches,
        organizations,
        organization_fields: organizationFields,
        organization_paid_account: organizationPaidAccount,
        organizationsInvited,
        organizationsInvited_fields: organizationsInvitedFields,
        notifications,
        notifications_entities: notificationsEntities,
        notifications_display: notificationsDisplay,
        notifications_limit: notificationsLimit,
        notification_fields: notificationFields,
        notification_memberCreator: notificationMemberCreator,
        notification_memberCreator_fields: notificationMemberCreatorFields,
        notification_before: notificationBefore,
        notification_since: notificationSince,
        tokens,
        paid_account: paidAccount,
        boardBackgrounds,
        customBoardBackgrounds,
        customStickers,
        customEmoji,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersByIdMember()
 */
export function updateMembersByIdMember(idMember: string, key: string, token: string, members: Members, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: members
    }));
}
/**
 * getMembersActionsByIdMember()
 */
export function getMembersActionsByIdMember(idMember: string, key: string, token: string, { entities, display, filter, fields, limit, format, since, before, page, idModels, member, memberFields, memberCreator, memberCreatorFields }: {
    entities?: string;
    display?: string;
    filter?: string;
    fields?: string;
    limit?: string;
    format?: string;
    since?: string;
    before?: string;
    page?: string;
    idModels?: string;
    member?: string;
    memberFields?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/actions${QS.query(QS.explode({
        entities,
        display,
        filter,
        fields,
        limit,
        format,
        since,
        before,
        page,
        idModels,
        member,
        member_fields: memberFields,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersAvatarByIdMember()
 */
export function addMembersAvatarByIdMember(idMember: string, key: string, token: string, membersAvatar: MembersAvatar, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/avatar${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersAvatar
    }));
}
/**
 * updateMembersAvatarSourceByIdMember()
 */
export function updateMembersAvatarSourceByIdMember(idMember: string, key: string, token: string, membersAvatarSource: MembersAvatarSource, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/avatarSource${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersAvatarSource
    }));
}
/**
 * updateMembersBioByIdMember()
 */
export function updateMembersBioByIdMember(idMember: string, key: string, token: string, membersBio: MembersBio, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/bio${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersBio
    }));
}
/**
 * getMembersBoardBackgroundsByIdMember()
 */
export function getMembersBoardBackgroundsByIdMember(idMember: string, key: string, token: string, { filter }: {
    filter?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardBackgrounds${QS.query(QS.explode({
        filter,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersBoardBackgroundsByIdMember()
 */
export function addMembersBoardBackgroundsByIdMember(idMember: string, key: string, token: string, membersBoardBackgrounds: MembersBoardBackgrounds, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardBackgrounds${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersBoardBackgrounds
    }));
}
/**
 * deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()
 */
export function deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(idMember: string, idBoardBackground: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardBackgrounds/${encodeURIComponent(idBoardBackground)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getMembersBoardBackgroundsByIdMemberByIdBoardBackground()
 */
export function getMembersBoardBackgroundsByIdMemberByIdBoardBackground(idMember: string, idBoardBackground: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardBackgrounds/${encodeURIComponent(idBoardBackground)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()
 */
export function updateMembersBoardBackgroundsByIdMemberByIdBoardBackground(idMember: string, idBoardBackground: string, key: string, token: string, membersBoardBackgrounds: MembersBoardBackgrounds, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardBackgrounds/${encodeURIComponent(idBoardBackground)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersBoardBackgrounds
    }));
}
/**
 * getMembersBoardStarsByIdMember()
 */
export function getMembersBoardStarsByIdMember(idMember: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardStars${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersBoardStarsByIdMember()
 */
export function addMembersBoardStarsByIdMember(idMember: string, key: string, token: string, membersBoardStars: MembersBoardStars, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardStars${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersBoardStars
    }));
}
/**
 * deleteMembersBoardStarsByIdMemberByIdBoardStar()
 */
export function deleteMembersBoardStarsByIdMemberByIdBoardStar(idMember: string, idBoardStar: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardStars/${encodeURIComponent(idBoardStar)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getMembersBoardStarsByIdMemberByIdBoardStar()
 */
export function getMembersBoardStarsByIdMemberByIdBoardStar(idMember: string, idBoardStar: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardStars/${encodeURIComponent(idBoardStar)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersBoardStarsByIdMemberByIdBoardStar()
 */
export function updateMembersBoardStarsByIdMemberByIdBoardStar(idMember: string, idBoardStar: string, key: string, token: string, membersBoardStars: MembersBoardStars, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardStars/${encodeURIComponent(idBoardStar)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersBoardStars
    }));
}
/**
 * updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()
 */
export function updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar(idMember: string, idBoardStar: string, key: string, token: string, membersBoardStarsIdBoard: MembersBoardStarsIdBoard, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardStars/${encodeURIComponent(idBoardStar)}/idBoard${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersBoardStarsIdBoard
    }));
}
/**
 * updateMembersBoardStarsPosByIdMemberByIdBoardStar()
 */
export function updateMembersBoardStarsPosByIdMemberByIdBoardStar(idMember: string, idBoardStar: string, key: string, token: string, membersBoardStarsPos: MembersBoardStarsPos, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardStars/${encodeURIComponent(idBoardStar)}/pos${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersBoardStarsPos
    }));
}
/**
 * getMembersBoardsByIdMember()
 */
export function getMembersBoardsByIdMember(idMember: string, key: string, token: string, { filter, fields, actions, actionsEntities, actionsLimit, actionsFormat, actionsSince, actionFields, memberships, organization, organizationFields, lists }: {
    filter?: string;
    fields?: string;
    actions?: string;
    actionsEntities?: string;
    actionsLimit?: string;
    actionsFormat?: string;
    actionsSince?: string;
    actionFields?: string;
    memberships?: string;
    organization?: string;
    organizationFields?: string;
    lists?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boards${QS.query(QS.explode({
        filter,
        fields,
        actions,
        actions_entities: actionsEntities,
        actions_limit: actionsLimit,
        actions_format: actionsFormat,
        actions_since: actionsSince,
        action_fields: actionFields,
        memberships,
        organization,
        organization_fields: organizationFields,
        lists,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersBoardsByIdMemberByFilter()
 */
export function getMembersBoardsByIdMemberByFilter(idMember: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boards/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersBoardsInvitedByIdMember()
 */
export function getMembersBoardsInvitedByIdMember(idMember: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardsInvited${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersBoardsInvitedByIdMemberByField()
 */
export function getMembersBoardsInvitedByIdMemberByField(idMember: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/boardsInvited/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersCardsByIdMember()
 */
export function getMembersCardsByIdMember(idMember: string, key: string, token: string, { actions, attachments, attachmentFields, stickers, members, memberFields, checkItemStates, checklists, limit, since, before, filter, fields }: {
    actions?: string;
    attachments?: string;
    attachmentFields?: string;
    stickers?: string;
    members?: string;
    memberFields?: string;
    checkItemStates?: string;
    checklists?: string;
    limit?: string;
    since?: string;
    before?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/cards${QS.query(QS.explode({
        actions,
        attachments,
        attachment_fields: attachmentFields,
        stickers,
        members,
        member_fields: memberFields,
        checkItemStates,
        checklists,
        limit,
        since,
        before,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersCardsByIdMemberByFilter()
 */
export function getMembersCardsByIdMemberByFilter(idMember: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/cards/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersCustomBoardBackgroundsByIdMember()
 */
export function getMembersCustomBoardBackgroundsByIdMember(idMember: string, key: string, token: string, { filter }: {
    filter?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customBoardBackgrounds${QS.query(QS.explode({
        filter,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersCustomBoardBackgroundsByIdMember()
 */
export function addMembersCustomBoardBackgroundsByIdMember(idMember: string, key: string, token: string, membersCustomBoardBackgrounds: MembersCustomBoardBackgrounds, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customBoardBackgrounds${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersCustomBoardBackgrounds
    }));
}
/**
 * deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
 */
export function deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(idMember: string, idBoardBackground: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customBoardBackgrounds/${encodeURIComponent(idBoardBackground)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
 */
export function getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(idMember: string, idBoardBackground: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customBoardBackgrounds/${encodeURIComponent(idBoardBackground)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()
 */
export function updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(idMember: string, idBoardBackground: string, key: string, token: string, membersCustomBoardBackgrounds: MembersCustomBoardBackgrounds, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customBoardBackgrounds/${encodeURIComponent(idBoardBackground)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersCustomBoardBackgrounds
    }));
}
/**
 * getMembersCustomEmojiByIdMember()
 */
export function getMembersCustomEmojiByIdMember(idMember: string, key: string, token: string, { filter }: {
    filter?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customEmoji${QS.query(QS.explode({
        filter,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersCustomEmojiByIdMember()
 */
export function addMembersCustomEmojiByIdMember(idMember: string, key: string, token: string, membersCustomEmoji: MembersCustomEmoji, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customEmoji${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersCustomEmoji
    }));
}
/**
 * getMembersCustomEmojiByIdMemberByIdCustomEmoji()
 */
export function getMembersCustomEmojiByIdMemberByIdCustomEmoji(idMember: string, idCustomEmoji: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customEmoji/${encodeURIComponent(idCustomEmoji)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersCustomStickersByIdMember()
 */
export function getMembersCustomStickersByIdMember(idMember: string, key: string, token: string, { filter }: {
    filter?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customStickers${QS.query(QS.explode({
        filter,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersCustomStickersByIdMember()
 */
export function addMembersCustomStickersByIdMember(idMember: string, key: string, token: string, membersCustomStickers: MembersCustomStickers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customStickers${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersCustomStickers
    }));
}
/**
 * deleteMembersCustomStickersByIdMemberByIdCustomSticker()
 */
export function deleteMembersCustomStickersByIdMemberByIdCustomSticker(idMember: string, idCustomSticker: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customStickers/${encodeURIComponent(idCustomSticker)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getMembersCustomStickersByIdMemberByIdCustomSticker()
 */
export function getMembersCustomStickersByIdMemberByIdCustomSticker(idMember: string, idCustomSticker: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/customStickers/${encodeURIComponent(idCustomSticker)}${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersDeltasByIdMember()
 */
export function getMembersDeltasByIdMember(idMember: string, tags: string, ixLastUpdate: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/deltas${QS.query(QS.explode({
        tags,
        ixLastUpdate,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersFullNameByIdMember()
 */
export function updateMembersFullNameByIdMember(idMember: string, key: string, token: string, membersFullName: MembersFullName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/fullName${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersFullName
    }));
}
/**
 * updateMembersInitialsByIdMember()
 */
export function updateMembersInitialsByIdMember(idMember: string, key: string, token: string, membersInitials: MembersInitials, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/initials${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersInitials
    }));
}
/**
 * getMembersNotificationsByIdMember()
 */
export function getMembersNotificationsByIdMember(idMember: string, key: string, token: string, { entities, display, filter, readFilter, fields, limit, page, before, since, memberCreator, memberCreatorFields }: {
    entities?: string;
    display?: string;
    filter?: string;
    readFilter?: string;
    fields?: string;
    limit?: string;
    page?: string;
    before?: string;
    since?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/notifications${QS.query(QS.explode({
        entities,
        display,
        filter,
        read_filter: readFilter,
        fields,
        limit,
        page,
        before,
        since,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersNotificationsByIdMemberByFilter()
 */
export function getMembersNotificationsByIdMemberByFilter(idMember: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/notifications/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersOneTimeMessagesDismissedByIdMember()
 */
export function addMembersOneTimeMessagesDismissedByIdMember(idMember: string, key: string, token: string, membersOneTimeMessagesDismissed: MembersOneTimeMessagesDismissed, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/oneTimeMessagesDismissed${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersOneTimeMessagesDismissed
    }));
}
/**
 * getMembersOrganizationsByIdMember()
 */
export function getMembersOrganizationsByIdMember(idMember: string, key: string, token: string, { filter, fields, paidAccount }: {
    filter?: string;
    fields?: string;
    paidAccount?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/organizations${QS.query(QS.explode({
        filter,
        fields,
        paid_account: paidAccount,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersOrganizationsByIdMemberByFilter()
 */
export function getMembersOrganizationsByIdMemberByFilter(idMember: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/organizations/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersOrganizationsInvitedByIdMember()
 */
export function getMembersOrganizationsInvitedByIdMember(idMember: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/organizationsInvited${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getMembersOrganizationsInvitedByIdMemberByField()
 */
export function getMembersOrganizationsInvitedByIdMemberByField(idMember: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/organizationsInvited/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersPrefsColorBlindByIdMember()
 */
export function updateMembersPrefsColorBlindByIdMember(idMember: string, key: string, token: string, prefsColorBlind: PrefsColorBlind, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/prefs/colorBlind${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsColorBlind
    }));
}
/**
 * updateMembersPrefsLocaleByIdMember()
 */
export function updateMembersPrefsLocaleByIdMember(idMember: string, key: string, token: string, prefsLocale: PrefsLocale, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/prefs/locale${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsLocale
    }));
}
/**
 * updateMembersPrefsMinutesBetweenSummariesByIdMember()
 */
export function updateMembersPrefsMinutesBetweenSummariesByIdMember(idMember: string, key: string, token: string, prefsMinutesBetweenSummaries: PrefsMinutesBetweenSummaries, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/prefs/minutesBetweenSummaries${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsMinutesBetweenSummaries
    }));
}
/**
 * getMembersSavedSearchesByIdMember()
 */
export function getMembersSavedSearchesByIdMember(idMember: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addMembersSavedSearchesByIdMember()
 */
export function addMembersSavedSearchesByIdMember(idMember: string, key: string, token: string, membersSavedSearches: MembersSavedSearches, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: membersSavedSearches
    }));
}
/**
 * deleteMembersSavedSearchesByIdMemberByIdSavedSearch()
 */
export function deleteMembersSavedSearchesByIdMemberByIdSavedSearch(idMember: string, idSavedSearch: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches/${encodeURIComponent(idSavedSearch)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getMembersSavedSearchesByIdMemberByIdSavedSearch()
 */
export function getMembersSavedSearchesByIdMemberByIdSavedSearch(idMember: string, idSavedSearch: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches/${encodeURIComponent(idSavedSearch)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersSavedSearchesByIdMemberByIdSavedSearch()
 */
export function updateMembersSavedSearchesByIdMemberByIdSavedSearch(idMember: string, idSavedSearch: string, key: string, token: string, membersSavedSearches: MembersSavedSearches, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches/${encodeURIComponent(idSavedSearch)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersSavedSearches
    }));
}
/**
 * updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()
 */
export function updateMembersSavedSearchesNameByIdMemberByIdSavedSearch(idMember: string, idSavedSearch: string, key: string, token: string, membersSavedSearchesName: MembersSavedSearchesName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches/${encodeURIComponent(idSavedSearch)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersSavedSearchesName
    }));
}
/**
 * updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()
 */
export function updateMembersSavedSearchesPosByIdMemberByIdSavedSearch(idMember: string, idSavedSearch: string, key: string, token: string, membersSavedSearchesPos: MembersSavedSearchesPos, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches/${encodeURIComponent(idSavedSearch)}/pos${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersSavedSearchesPos
    }));
}
/**
 * updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()
 */
export function updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch(idMember: string, idSavedSearch: string, key: string, token: string, membersSavedSearchesQuery: MembersSavedSearchesQuery, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/savedSearches/${encodeURIComponent(idSavedSearch)}/query${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersSavedSearchesQuery
    }));
}
/**
 * getMembersTokensByIdMember()
 */
export function getMembersTokensByIdMember(idMember: string, key: string, token: string, { filter }: {
    filter?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/tokens${QS.query(QS.explode({
        filter,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateMembersUsernameByIdMember()
 */
export function updateMembersUsernameByIdMember(idMember: string, key: string, token: string, membersUsername: MembersUsername, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/username${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: membersUsername
    }));
}
/**
 * getMembersByIdMemberByField()
 */
export function getMembersByIdMemberByField(idMember: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/members/${encodeURIComponent(idMember)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addNotificationsAllRead()
 */
export function addNotificationsAllRead(key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/all/read${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * getNotificationsByIdNotification()
 */
export function getNotificationsByIdNotification(idNotification: string, key: string, token: string, { display, entities, fields, memberCreator, memberCreatorFields, board, boardFields, list, card, cardFields, organization, organizationFields, member, memberFields }: {
    display?: string;
    entities?: string;
    fields?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
    board?: string;
    boardFields?: string;
    list?: string;
    card?: string;
    cardFields?: string;
    organization?: string;
    organizationFields?: string;
    member?: string;
    memberFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}${QS.query(QS.explode({
        display,
        entities,
        fields,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        board,
        board_fields: boardFields,
        list,
        card,
        card_fields: cardFields,
        organization,
        organization_fields: organizationFields,
        member,
        member_fields: memberFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateNotificationsByIdNotification()
 */
export function updateNotificationsByIdNotification(idNotification: string, key: string, token: string, notifications: Notifications, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: notifications
    }));
}
/**
 * getNotificationsBoardByIdNotification()
 */
export function getNotificationsBoardByIdNotification(idNotification: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/board${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsBoardByIdNotificationByField()
 */
export function getNotificationsBoardByIdNotificationByField(idNotification: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/board/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsCardByIdNotification()
 */
export function getNotificationsCardByIdNotification(idNotification: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/card${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsCardByIdNotificationByField()
 */
export function getNotificationsCardByIdNotificationByField(idNotification: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/card/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsDisplayByIdNotification()
 */
export function getNotificationsDisplayByIdNotification(idNotification: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/display${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsEntitiesByIdNotification()
 */
export function getNotificationsEntitiesByIdNotification(idNotification: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/entities${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsListByIdNotification()
 */
export function getNotificationsListByIdNotification(idNotification: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/list${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsListByIdNotificationByField()
 */
export function getNotificationsListByIdNotificationByField(idNotification: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/list/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsMemberByIdNotification()
 */
export function getNotificationsMemberByIdNotification(idNotification: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/member${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsMemberByIdNotificationByField()
 */
export function getNotificationsMemberByIdNotificationByField(idNotification: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/member/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsMemberCreatorByIdNotification()
 */
export function getNotificationsMemberCreatorByIdNotification(idNotification: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/memberCreator${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsMemberCreatorByIdNotificationByField()
 */
export function getNotificationsMemberCreatorByIdNotificationByField(idNotification: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/memberCreator/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsOrganizationByIdNotification()
 */
export function getNotificationsOrganizationByIdNotification(idNotification: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/organization${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getNotificationsOrganizationByIdNotificationByField()
 */
export function getNotificationsOrganizationByIdNotificationByField(idNotification: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/organization/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateNotificationsUnreadByIdNotification()
 */
export function updateNotificationsUnreadByIdNotification(idNotification: string, key: string, token: string, notificationsUnread: NotificationsUnread, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/unread${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: notificationsUnread
    }));
}
/**
 * getNotificationsByIdNotificationByField()
 */
export function getNotificationsByIdNotificationByField(idNotification: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/notifications/${encodeURIComponent(idNotification)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addOrganizations()
 */
export function addOrganizations(key: string, token: string, organizations: Organizations, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: organizations
    }));
}
/**
 * deleteOrganizationsByIdOrg()
 */
export function deleteOrganizationsByIdOrg(idOrg: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getOrganizationsByIdOrg()
 */
export function getOrganizationsByIdOrg(idOrg: string, key: string, token: string, { actions, actionsEntities, actionsDisplay, actionsLimit, actionFields, memberships, membershipsMember, membershipsMemberFields, members, memberFields, memberActivity, membersInvited, membersInvitedFields, boards, boardFields, boardActions, boardActionsEntities, boardActionsDisplay, boardActionsFormat, boardActionsSince, boardActionsLimit, boardActionFields, boardLists, paidAccount, fields }: {
    actions?: string;
    actionsEntities?: string;
    actionsDisplay?: string;
    actionsLimit?: string;
    actionFields?: string;
    memberships?: string;
    membershipsMember?: string;
    membershipsMemberFields?: string;
    members?: string;
    memberFields?: string;
    memberActivity?: string;
    membersInvited?: string;
    membersInvitedFields?: string;
    boards?: string;
    boardFields?: string;
    boardActions?: string;
    boardActionsEntities?: string;
    boardActionsDisplay?: string;
    boardActionsFormat?: string;
    boardActionsSince?: string;
    boardActionsLimit?: string;
    boardActionFields?: string;
    boardLists?: string;
    paidAccount?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}${QS.query(QS.explode({
        actions,
        actions_entities: actionsEntities,
        actions_display: actionsDisplay,
        actions_limit: actionsLimit,
        action_fields: actionFields,
        memberships,
        memberships_member: membershipsMember,
        memberships_member_fields: membershipsMemberFields,
        members,
        member_fields: memberFields,
        member_activity: memberActivity,
        membersInvited,
        membersInvited_fields: membersInvitedFields,
        boards,
        board_fields: boardFields,
        board_actions: boardActions,
        board_actions_entities: boardActionsEntities,
        board_actions_display: boardActionsDisplay,
        board_actions_format: boardActionsFormat,
        board_actions_since: boardActionsSince,
        board_actions_limit: boardActionsLimit,
        board_action_fields: boardActionFields,
        board_lists: boardLists,
        paid_account: paidAccount,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateOrganizationsByIdOrg()
 */
export function updateOrganizationsByIdOrg(idOrg: string, key: string, token: string, organizations: Organizations, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizations
    }));
}
/**
 * getOrganizationsActionsByIdOrg()
 */
export function getOrganizationsActionsByIdOrg(idOrg: string, key: string, token: string, { entities, display, filter, fields, limit, format, since, before, page, idModels, member, memberFields, memberCreator, memberCreatorFields }: {
    entities?: string;
    display?: string;
    filter?: string;
    fields?: string;
    limit?: string;
    format?: string;
    since?: string;
    before?: string;
    page?: string;
    idModels?: string;
    member?: string;
    memberFields?: string;
    memberCreator?: string;
    memberCreatorFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/actions${QS.query(QS.explode({
        entities,
        display,
        filter,
        fields,
        limit,
        format,
        since,
        before,
        page,
        idModels,
        member,
        member_fields: memberFields,
        memberCreator,
        memberCreator_fields: memberCreatorFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getOrganizationsBoardsByIdOrg()
 */
export function getOrganizationsBoardsByIdOrg(idOrg: string, key: string, token: string, { filter, fields, actions, actionsEntities, actionsLimit, actionsFormat, actionsSince, actionFields, memberships, organization, organizationFields, lists }: {
    filter?: string;
    fields?: string;
    actions?: string;
    actionsEntities?: string;
    actionsLimit?: string;
    actionsFormat?: string;
    actionsSince?: string;
    actionFields?: string;
    memberships?: string;
    organization?: string;
    organizationFields?: string;
    lists?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/boards${QS.query(QS.explode({
        filter,
        fields,
        actions,
        actions_entities: actionsEntities,
        actions_limit: actionsLimit,
        actions_format: actionsFormat,
        actions_since: actionsSince,
        action_fields: actionFields,
        memberships,
        organization,
        organization_fields: organizationFields,
        lists,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getOrganizationsBoardsByIdOrgByFilter()
 */
export function getOrganizationsBoardsByIdOrgByFilter(idOrg: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/boards/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getOrganizationsDeltasByIdOrg()
 */
export function getOrganizationsDeltasByIdOrg(idOrg: string, tags: string, ixLastUpdate: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/deltas${QS.query(QS.explode({
        tags,
        ixLastUpdate,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateOrganizationsDescByIdOrg()
 */
export function updateOrganizationsDescByIdOrg(idOrg: string, key: string, token: string, organizationsDesc: OrganizationsDesc, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/desc${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsDesc
    }));
}
/**
 * updateOrganizationsDisplayNameByIdOrg()
 */
export function updateOrganizationsDisplayNameByIdOrg(idOrg: string, key: string, token: string, organizationsDisplayName: OrganizationsDisplayName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/displayName${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsDisplayName
    }));
}
/**
 * deleteOrganizationsLogoByIdOrg()
 */
export function deleteOrganizationsLogoByIdOrg(idOrg: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/logo${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * addOrganizationsLogoByIdOrg()
 */
export function addOrganizationsLogoByIdOrg(idOrg: string, key: string, token: string, organizationsLogo: OrganizationsLogo, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/logo${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: organizationsLogo
    }));
}
/**
 * getOrganizationsMembersByIdOrg()
 */
export function getOrganizationsMembersByIdOrg(idOrg: string, key: string, token: string, { filter, fields, activity }: {
    filter?: string;
    fields?: string;
    activity?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members${QS.query(QS.explode({
        filter,
        fields,
        activity,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateOrganizationsMembersByIdOrg()
 */
export function updateOrganizationsMembersByIdOrg(idOrg: string, key: string, token: string, organizationsMembers: OrganizationsMembers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsMembers
    }));
}
/**
 * getOrganizationsMembersByIdOrgByFilter()
 */
export function getOrganizationsMembersByIdOrgByFilter(idOrg: string, filter: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members/${encodeURIComponent(filter)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * deleteOrganizationsMembersByIdOrgByIdMember()
 */
export function deleteOrganizationsMembersByIdOrgByIdMember(idOrg: string, idMember: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateOrganizationsMembersByIdOrgByIdMember()
 */
export function updateOrganizationsMembersByIdOrgByIdMember(idOrg: string, idMember: string, key: string, token: string, organizationsMembers: OrganizationsMembers, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members/${encodeURIComponent(idMember)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsMembers
    }));
}
/**
 * deleteOrganizationsMembersAllByIdOrgByIdMember()
 */
export function deleteOrganizationsMembersAllByIdOrgByIdMember(idOrg: string, idMember: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members/${encodeURIComponent(idMember)}/all${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getOrganizationsMembersCardsByIdOrgByIdMember()
 */
export function getOrganizationsMembersCardsByIdOrgByIdMember(idOrg: string, idMember: string, key: string, token: string, { actions, attachments, attachmentFields, members, memberFields, checkItemStates, checklists, board, boardFields, list, listFields, filter, fields }: {
    actions?: string;
    attachments?: string;
    attachmentFields?: string;
    members?: string;
    memberFields?: string;
    checkItemStates?: string;
    checklists?: string;
    board?: string;
    boardFields?: string;
    list?: string;
    listFields?: string;
    filter?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members/${encodeURIComponent(idMember)}/cards${QS.query(QS.explode({
        actions,
        attachments,
        attachment_fields: attachmentFields,
        members,
        member_fields: memberFields,
        checkItemStates,
        checklists,
        board,
        board_fields: boardFields,
        list,
        list_fields: listFields,
        filter,
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateOrganizationsMembersDeactivatedByIdOrgByIdMember()
 */
export function updateOrganizationsMembersDeactivatedByIdOrgByIdMember(idOrg: string, idMember: string, key: string, token: string, organizationsMembersDeactivated: OrganizationsMembersDeactivated, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/members/${encodeURIComponent(idMember)}/deactivated${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsMembersDeactivated
    }));
}
/**
 * getOrganizationsMembersInvitedByIdOrg()
 */
export function getOrganizationsMembersInvitedByIdOrg(idOrg: string, key: string, token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/membersInvited${QS.query(QS.explode({
        fields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getOrganizationsMembersInvitedByIdOrgByField()
 */
export function getOrganizationsMembersInvitedByIdOrgByField(idOrg: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/membersInvited/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getOrganizationsMembershipsByIdOrg()
 */
export function getOrganizationsMembershipsByIdOrg(idOrg: string, key: string, token: string, { filter, member, memberFields }: {
    filter?: string;
    member?: string;
    memberFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/memberships${QS.query(QS.explode({
        filter,
        member,
        member_fields: memberFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getOrganizationsMembershipsByIdOrgByIdMembership()
 */
export function getOrganizationsMembershipsByIdOrgByIdMembership(idOrg: string, idMembership: string, key: string, token: string, { member, memberFields }: {
    member?: string;
    memberFields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/memberships/${encodeURIComponent(idMembership)}${QS.query(QS.explode({
        member,
        member_fields: memberFields,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateOrganizationsMembershipsByIdOrgByIdMembership()
 */
export function updateOrganizationsMembershipsByIdOrgByIdMembership(idOrg: string, idMembership: string, key: string, token: string, organizationsMemberships: OrganizationsMemberships, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/memberships/${encodeURIComponent(idMembership)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsMemberships
    }));
}
/**
 * updateOrganizationsNameByIdOrg()
 */
export function updateOrganizationsNameByIdOrg(idOrg: string, key: string, token: string, organizationsName: OrganizationsName, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/name${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsName
    }));
}
/**
 * deleteOrganizationsPrefsAssociatedDomainByIdOrg()
 */
export function deleteOrganizationsPrefsAssociatedDomainByIdOrg(idOrg: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/associatedDomain${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateOrganizationsPrefsAssociatedDomainByIdOrg()
 */
export function updateOrganizationsPrefsAssociatedDomainByIdOrg(idOrg: string, key: string, token: string, prefsAssociatedDomain: PrefsAssociatedDomain, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/associatedDomain${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsAssociatedDomain
    }));
}
/**
 * updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()
 */
export function updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg(idOrg: string, key: string, token: string, prefsBoardVisibilityRestrict: PrefsBoardVisibilityRestrict, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/boardVisibilityRestrict/org${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsBoardVisibilityRestrict
    }));
}
/**
 * updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()
 */
export function updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg(idOrg: string, key: string, token: string, prefsBoardVisibilityRestrict: PrefsBoardVisibilityRestrict, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/boardVisibilityRestrict/private${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsBoardVisibilityRestrict
    }));
}
/**
 * updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()
 */
export function updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg(idOrg: string, key: string, token: string, prefsBoardVisibilityRestrict: PrefsBoardVisibilityRestrict, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/boardVisibilityRestrict/public${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsBoardVisibilityRestrict
    }));
}
/**
 * updateOrganizationsPrefsExternalMembersDisabledByIdOrg()
 */
export function updateOrganizationsPrefsExternalMembersDisabledByIdOrg(idOrg: string, key: string, token: string, prefsExternalMembersDisabled: PrefsExternalMembersDisabled, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/externalMembersDisabled${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsExternalMembersDisabled
    }));
}
/**
 * updateOrganizationsPrefsGoogleAppsVersionByIdOrg()
 */
export function updateOrganizationsPrefsGoogleAppsVersionByIdOrg(idOrg: string, key: string, token: string, prefsGoogleAppsVersion: PrefsGoogleAppsVersion, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/googleAppsVersion${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsGoogleAppsVersion
    }));
}
/**
 * deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()
 */
export function deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(idOrg: string, value: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/orgInviteRestrict${QS.query(QS.explode({
        value,
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * updateOrganizationsPrefsOrgInviteRestrictByIdOrg()
 */
export function updateOrganizationsPrefsOrgInviteRestrictByIdOrg(idOrg: string, key: string, token: string, prefsOrgInviteRestrict: PrefsOrgInviteRestrict, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/orgInviteRestrict${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsOrgInviteRestrict
    }));
}
/**
 * updateOrganizationsPrefsPermissionLevelByIdOrg()
 */
export function updateOrganizationsPrefsPermissionLevelByIdOrg(idOrg: string, key: string, token: string, prefsPermissionLevel: PrefsPermissionLevel, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/prefs/permissionLevel${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: prefsPermissionLevel
    }));
}
/**
 * updateOrganizationsWebsiteByIdOrg()
 */
export function updateOrganizationsWebsiteByIdOrg(idOrg: string, key: string, token: string, organizationsWebsite: OrganizationsWebsite, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/website${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: organizationsWebsite
    }));
}
/**
 * getOrganizationsByIdOrgByField()
 */
export function getOrganizationsByIdOrgByField(idOrg: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/organizations/${encodeURIComponent(idOrg)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getSearch()
 */
export function getSearch(query: string, idOrganizations: string, key: string, token: string, { idBoards, idCards, modelTypes, boardFields, boardsLimit, cardFields, cardsLimit, cardsPage, cardBoard, cardList, cardMembers, cardStickers, cardAttachments, organizationFields, organizationsLimit, memberFields, membersLimit, partial }: {
    idBoards?: string;
    idCards?: string;
    modelTypes?: string;
    boardFields?: string;
    boardsLimit?: string;
    cardFields?: string;
    cardsLimit?: string;
    cardsPage?: string;
    cardBoard?: string;
    cardList?: string;
    cardMembers?: string;
    cardStickers?: string;
    cardAttachments?: string;
    organizationFields?: string;
    organizationsLimit?: string;
    memberFields?: string;
    membersLimit?: string;
    partial?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/search${QS.query(QS.explode({
        query,
        idBoards,
        idOrganizations,
        idCards,
        modelTypes,
        board_fields: boardFields,
        boards_limit: boardsLimit,
        card_fields: cardFields,
        cards_limit: cardsLimit,
        cards_page: cardsPage,
        card_board: cardBoard,
        card_list: cardList,
        card_members: cardMembers,
        card_stickers: cardStickers,
        card_attachments: cardAttachments,
        organization_fields: organizationFields,
        organizations_limit: organizationsLimit,
        member_fields: memberFields,
        members_limit: membersLimit,
        partial,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * getSearchMembers()
 */
export function getSearchMembers(query: string, key: string, token: string, { limit, idBoard, idOrganization, onlyOrgMembers }: {
    limit?: string;
    idBoard?: string;
    idOrganization?: string;
    onlyOrgMembers?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/search/members${QS.query(QS.explode({
        query,
        limit,
        idBoard,
        idOrganization,
        onlyOrgMembers,
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addSessions()
 */
export function addSessions(key: string, token: string, sessions: Sessions, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/sessions${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: sessions
    }));
}
/**
 * getSessionsSocket()
 */
export function getSessionsSocket(key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/sessions/socket${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateSessionsByIdSession()
 */
export function updateSessionsByIdSession(idSession: string, key: string, token: string, sessions: Sessions, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/sessions/${encodeURIComponent(idSession)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: sessions
    }));
}
/**
 * updateSessionsStatusByIdSession()
 */
export function updateSessionsStatusByIdSession(idSession: string, key: string, token: string, sessionsStatus: SessionsStatus, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/sessions/${encodeURIComponent(idSession)}/status${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: sessionsStatus
    }));
}
/**
 * deleteTokensByToken()
 */
export function deleteTokensByToken(token: string, key: string, tokenQuery: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getTokensByToken()
 */
export function getTokensByToken(token: string, key: string, tokenQuery: string, { fields, webhooks }: {
    fields?: string;
    webhooks?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}${QS.query(QS.explode({
        fields,
        webhooks,
        key,
        token: tokenQuery
    }))}`, {
        ...opts
    });
}
/**
 * getTokensMemberByToken()
 */
export function getTokensMemberByToken(token: string, key: string, tokenQuery: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/member${QS.query(QS.explode({
        fields,
        key,
        token: tokenQuery
    }))}`, {
        ...opts
    });
}
/**
 * getTokensMemberByTokenByField()
 */
export function getTokensMemberByTokenByField(token: string, field: string, key: string, tokenQuery: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/member/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, {
        ...opts
    });
}
/**
 * getTokensWebhooksByToken()
 */
export function getTokensWebhooksByToken(token: string, key: string, tokenQuery: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/webhooks${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, {
        ...opts
    });
}
/**
 * addTokensWebhooksByToken()
 */
export function addTokensWebhooksByToken(token: string, key: string, tokenQuery: string, tokensWebhooks: TokensWebhooks, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/webhooks${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: tokensWebhooks
    }));
}
/**
 * updateTokensWebhooksByToken()
 */
export function updateTokensWebhooksByToken(token: string, key: string, tokenQuery: string, tokensWebhooks: TokensWebhooks, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/webhooks${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: tokensWebhooks
    }));
}
/**
 * deleteTokensWebhooksByTokenByIdWebhook()
 */
export function deleteTokensWebhooksByTokenByIdWebhook(token: string, idWebhook: string, key: string, tokenQuery: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/webhooks/${encodeURIComponent(idWebhook)}${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getTokensWebhooksByTokenByIdWebhook()
 */
export function getTokensWebhooksByTokenByIdWebhook(token: string, idWebhook: string, key: string, tokenQuery: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/webhooks/${encodeURIComponent(idWebhook)}${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, {
        ...opts
    });
}
/**
 * getTokensByTokenByField()
 */
export function getTokensByTokenByField(token: string, field: string, key: string, tokenQuery: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/tokens/${encodeURIComponent(token)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token: tokenQuery
    }))}`, {
        ...opts
    });
}
/**
 * getTypesById()
 */
export function getTypesById(id: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/types/${encodeURIComponent(id)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * addWebhooks()
 */
export function addWebhooks(key: string, token: string, webhooks: Webhooks, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: webhooks
    }));
}
/**
 * updateWebhooks()
 */
export function updateWebhooks(key: string, token: string, webhooks: Webhooks, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webhooks
    }));
}
/**
 * deleteWebhooksByIdWebhook()
 */
export function deleteWebhooksByIdWebhook(idWebhook: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * getWebhooksByIdWebhook()
 */
export function getWebhooksByIdWebhook(idWebhook: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
/**
 * updateWebhooksByIdWebhook()
 */
export function updateWebhooksByIdWebhook(idWebhook: string, key: string, token: string, webhooks: Webhooks, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webhooks
    }));
}
/**
 * updateWebhooksActiveByIdWebhook()
 */
export function updateWebhooksActiveByIdWebhook(idWebhook: string, key: string, token: string, webhooksActive: WebhooksActive, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}/active${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webhooksActive
    }));
}
/**
 * updateWebhooksCallbackURLByIdWebhook()
 */
export function updateWebhooksCallbackUrlByIdWebhook(idWebhook: string, key: string, token: string, webhooksCallbackUrl: WebhooksCallbackUrl, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}/callbackURL${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webhooksCallbackUrl
    }));
}
/**
 * updateWebhooksDescriptionByIdWebhook()
 */
export function updateWebhooksDescriptionByIdWebhook(idWebhook: string, key: string, token: string, webhooksDescription: WebhooksDescription, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}/description${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webhooksDescription
    }));
}
/**
 * updateWebhooksIdModelByIdWebhook()
 */
export function updateWebhooksIdModelByIdWebhook(idWebhook: string, key: string, token: string, webhooksIdModel: WebhooksIdModel, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}/idModel${QS.query(QS.explode({
        key,
        token
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: webhooksIdModel
    }));
}
/**
 * getWebhooksByIdWebhookByField()
 */
export function getWebhooksByIdWebhookByField(idWebhook: string, field: string, key: string, token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/webhooks/${encodeURIComponent(idWebhook)}/${encodeURIComponent(field)}${QS.query(QS.explode({
        key,
        token
    }))}`, {
        ...opts
    });
}
