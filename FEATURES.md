# Features
Features come from [Sparky](https://www.npmjs.com/package/node-sparky)
Thanks for this great dev :)
 
## Features list 
* setToken(token)
* * return String
* contentGet(contentId)
* * return <File>
* contentCreate(filePath, [timeout])
* * return <File>
* licensesGet([orgId], [max])
* * return Array.<License>
* licenseGet(licenseId)
* * return <License>
* membershipsGet([membershipSearch], [max])
* * return Array.<Membership>
* membershipGet(membershipId)
* * return <Membership>
* membershipAdd(roomId, personEmail, [isModerator])
* * return <Membership>
* membershipUpdate(membership)
* * return <Membership>
* membershipRemove(membershipId)
* messagesGet(messageSearch, [max])
* * return Array.<Message>
* messageGet(messageId)
* * return <Message>
* messageSend(message, [file])
* * return <Message>
* messageRemove(messageId)
* organizationsGet([max])
* * return Array.<Organization>
* organizationGet(orgId)
* * return <Organization>
* peopleGet([personSearch], [max])
* * return Array.<Person>
* personGet(personId)
* * return <Person>
* personMe()
* * return <Person>
* personAdd(person)
* * return <Person>
* personUpdate(person)
* * return <Person>
* personRemove(personId)
* rolesGet([max])
* * return Array.<Role>
* roleGet(roleId)
* * return <Role>
* roomsGet([roomSearch], [max])
* * return Array.<Room>
* roomGet(roomId)
* * return <Room>
* roomAdd(title, [teamId])
* * return <Room>
* roomUpdate(room)
* * return <Room>
* roomRemove(roomId)
* teamsGet([max])
* * return Array.<Team>
* teamGet(teamId)
* * return <Team>
* teamAdd(name)
* * return <Team>
* teamUpdate(team)
* * return <Team>
* teamRemove(teamId)
* teamMembershipsGet(teamId, [max])
* * return Array.<TeamMembership>
* teamMembershipGet(membershipId)
* * return <TeamMembership>
* teamMembershipAdd(teamId, personEmail, isModerator)
* * return <TeamMembership>
* teamMembershipUpdate(teamMembership)
* * return <TeamMembership>
* teamMembershipRemove(membershipId)
* webhooksGet([max])
* * return Array.<Webhook>
* webhookGet(webhookId)
* * return <Webhook>
* webhookAdd(webhook)
* * return <Webhook>
* webhookUpdate(webhook)
* * return <Webhook>
* webhookRemove(webhookId)
* webhookAuth(secret, signature, payload)
* * return String | Object
* webhookListen() . webhookHandler
