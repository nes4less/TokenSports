# @tokensports/kit

Shared TypeScript model library for the Token Sports ecosystem. Defines all domain entities, enums, and utility functions used across TokenSports-Express (API) and TokenSports-Utility (mobile app).

## Models (45)

ColorProfile, Comment, Content, Context, DataSource, Division, Enrollment, Event, Facility, Flag, Game, GameAssignment, GameRecord, GuestPass, Handshake, Image, League, Locatable, Media, Message, Module, Notification, Organization, Participation, Payment, Person, Publication, Query, Range, Relationship, Roster, RotationGroup, Rule, RuleSet, Scope, Session, StatusChange, Style, Subscription, Tag, Team, Transaction, Venue, View

## Usage

```ts
import { Person, Team, Game, Tag } from '@tokensports/kit'

const player = new Person({ firstName: 'Marcus', lastName: 'Johnson' })
const team = new Team({ title: 'Thunder FC', orgId: 'org-123' })
```

## Scripts

```bash
npm run build     # Compile TypeScript to dist/
npm test          # Run Jest tests (builds first)
npm run lint      # ESLint
npm run coverage  # Jest with coverage report
```

## Related Projects

| Project | Description |
|---|---|
| **TokenSports-Express** | REST API backend (Express + MongoDB/Supabase) |
| **TokenSports-Utility** | React Native/Expo mobile app |
