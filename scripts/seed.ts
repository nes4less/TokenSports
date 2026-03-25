import { MongoClient } from 'mongodb'

import {
  ColorProfile, Content, Division, Enrollment, Event, Facility, Flag, Game,
  GameAssignment, GameRecord, GuestPass, Image, League, Media, Module,
  Notification, Organization, Participation, Payment, Person, Relationship,
  Roster, RotationGroup, Ruleset, Session, Tag, Team, Transaction, Venue
} from '../src'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017'
const MONGO_DB = process.env.MONGO_DB || 'tokensports'

const seed = async () => {
  const client = new MongoClient(MONGO_URI)
  await client.connect()
  const db = client.db(MONGO_DB)

  // Clear all collections
  const collections = [
    Person.collection, Organization.collection, Facility.collection, Venue.collection,
    Session.collection, League.collection, Division.collection, Ruleset.collection,
    Team.collection, Enrollment.collection, Roster.collection, Participation.collection,
    RotationGroup.collection, Game.collection, GameRecord.collection, Event.collection,
    GameAssignment.collection, Payment.collection, Transaction.collection, Media.collection,
    Content.collection, Relationship.collection, GuestPass.collection, Flag.collection,
    Notification.collection, Module.collection
  ]
  for (const c of collections) await db.collection(c).deleteMany({})

  // ==================== PERSONS ====================
  const persons = [
    new Person({ firstName: 'Marcus', lastName: 'Johnson', displayName: 'MJ', email: 'marcus@example.com', phone: '555-0101', dateOfBirth: '1990-03-15', verified: true, publicProfile: true, themeColor: 'blue', tags: [new Tag({ title: 'player' }), new Tag({ title: 'coach' })], image: 'https://placehold.co/400x400/2563eb/white?text=MJ', metadata: { preferredPosition: 'midfielder', skillLevel: 'competitive' } }),
    new Person({ firstName: 'Sarah', lastName: 'Chen', displayName: 'Sarah C', email: 'sarah@example.com', phone: '555-0102', dateOfBirth: '1988-07-22', verified: true, publicProfile: true, themeColor: 'purple', tags: [new Tag({ title: 'official' })], image: 'https://placehold.co/400x400/7c3aed/white?text=SC', metadata: { officialType: 'referee', certLevel: 'USSF Grade 7' } }),
    new Person({ firstName: 'Jake', lastName: 'Williams', displayName: 'Jake W', email: 'jake@example.com', phone: '555-0103', dateOfBirth: '1995-11-03', verified: true, tags: [new Tag({ title: 'player' })], image: 'https://placehold.co/400x400/16a34a/white?text=JW', metadata: { preferredPosition: 'goalkeeper' } }),
    new Person({ firstName: 'Emily', lastName: 'Rodriguez', verified: false, manualEntry: true, createdBy: 'stub-creator', tags: [new Tag({ title: 'player' })], metadata: { note: 'Added by team manager, not yet claimed' } }),
    new Person({ firstName: 'David', lastName: 'Park', displayName: 'Coach Dave', email: 'dave@example.com', phone: '555-0105', dateOfBirth: '1982-01-20', verified: true, tags: [new Tag({ title: 'coach' }), new Tag({ title: 'org-admin' })], image: 'https://placehold.co/400x400/ea580c/white?text=DP', metadata: { coachingLicense: 'USSF D' } }),
    new Person({ firstName: 'Lisa', lastName: 'Thompson', displayName: 'Lisa T', email: 'lisa@example.com', phone: '555-0106', dateOfBirth: '1991-06-14', verified: true, tags: [new Tag({ title: 'player' })], image: 'https://placehold.co/400x400/ec4899/white?text=LT', metadata: { preferredPosition: 'forward' } }),
    new Person({ firstName: 'Carlos', lastName: 'Mendez', displayName: 'Carlos M', email: 'carlos@example.com', phone: '555-0107', dateOfBirth: '1993-09-28', verified: true, tags: [new Tag({ title: 'player' }), new Tag({ title: 'scorekeeper' })], image: 'https://placehold.co/400x400/f59e0b/white?text=CM', metadata: { preferredPosition: 'defender' } }),
    new Person({ firstName: 'Amy', lastName: 'Foster', displayName: 'Amy F', email: 'amy@example.com', phone: '555-0108', dateOfBirth: '1987-12-05', verified: true, tags: [new Tag({ title: 'facility-owner' })], image: 'https://placehold.co/400x400/0891b2/white?text=AF', metadata: {} }),
    new Person({ firstName: 'Brian', lastName: 'Kim', displayName: 'Brian K', email: 'brian@example.com', phone: '555-0109', dateOfBirth: '1996-04-17', verified: true, publicProfile: true, tags: [new Tag({ title: 'player' })], image: 'https://placehold.co/400x400/6366f1/white?text=BK', metadata: { preferredPosition: 'winger', freeAgent: 'true' } }),
    new Person({ firstName: 'Rachel', lastName: 'Davis', displayName: 'Rachel D', email: 'rachel@example.com', phone: '555-0110', dateOfBirth: '2010-08-30', verified: true, tags: [new Tag({ title: 'player' })], metadata: { parentRequired: 'true' } }),
    new Person({ firstName: 'Tom', lastName: 'Davis', displayName: 'Tom D', email: 'tom@example.com', phone: '555-0111', dateOfBirth: '1980-02-14', verified: true, tags: [new Tag({ title: 'parent' })], image: 'https://placehold.co/400x400/64748b/white?text=TD', metadata: {} }),
    new Person({ firstName: 'Nina', lastName: 'Patel', displayName: 'Nina P', email: 'nina@example.com', phone: '555-0112', dateOfBirth: '1992-05-09', verified: true, tags: [new Tag({ title: 'official' })], image: 'https://placehold.co/400x400/a855f7/white?text=NP', metadata: { officialType: 'assistant-referee' } })
  ]
  await db.collection(Person.collection).insertMany(persons)
  console.log(`✓ ${persons.length} persons`)

  // ==================== ORGANIZATIONS ====================
  const orgs = [
    new Organization({ name: 'Metro United Sports', slug: 'metro-united', subdomain: 'metro-united', createdBy: persons[4].id, color: new ColorProfile({ primaryHex: '#2563eb', secondaryHex: '#1e40af', confirmed: true }), image: 'https://placehold.co/400x400/2563eb/white?text=MU', tags: [new Tag({ title: 'soccer' }), new Tag({ title: 'basketball' })], onboardingChecklist: { identity: 'complete', stripe: 'pending', staff: 'complete', facility: 'complete', league: 'complete' }, metadata: { city: 'Austin', state: 'TX', founded: '2024' } }),
    new Organization({ name: 'Southside Recreation League', slug: 'southside-rec', subdomain: 'southside-rec', createdBy: persons[0].id, color: new ColorProfile({ primaryHex: '#16a34a', secondaryHex: '#15803d', confirmed: true }), image: 'https://placehold.co/400x400/16a34a/white?text=SRL', tags: [new Tag({ title: 'soccer' }), new Tag({ title: 'kickball' })], onboardingChecklist: { identity: 'complete', stripe: 'complete', staff: 'pending' }, metadata: { city: 'Austin', state: 'TX', founded: '2025' } })
  ]
  await db.collection(Organization.collection).insertMany(orgs)
  console.log(`✓ ${orgs.length} organizations`)

  // ==================== FACILITIES ====================
  const facilities = [
    new Facility({ name: 'Eastside Sports Complex', slug: 'eastside-sports', subdomain: 'eastside-sports', ownerId: persons[7].id, address: '1200 E Riverside Dr, Austin, TX 78741', phone: '555-0200', email: 'info@eastsidesc.com', amenities: ['parking', 'restrooms', 'concessions', 'lighting', 'bleachers'], color: new ColorProfile({ primaryHex: '#0891b2', confirmed: true }), image: 'https://placehold.co/800x400/0891b2/white?text=Eastside+Sports', tags: [new Tag({ title: 'outdoor' }), new Tag({ title: 'soccer' })], metadata: { totalAcres: '12', yearBuilt: '2018' } }),
    new Facility({ name: 'Downtown Fieldhouse', slug: 'downtown-fieldhouse', subdomain: 'downtown-fieldhouse', address: '400 Congress Ave, Austin, TX 78701', phone: '555-0201', email: 'book@dtfieldhouse.com', amenities: ['parking', 'restrooms', 'ac', 'wifi', 'locker-rooms'], color: new ColorProfile({ primaryHex: '#dc2626', confirmed: true }), image: 'https://placehold.co/800x400/dc2626/white?text=Downtown+Fieldhouse', tags: [new Tag({ title: 'indoor' }), new Tag({ title: 'basketball' }), new Tag({ title: 'volleyball' })], metadata: { squareFeet: '45000', yearBuilt: '2020' } })
  ]
  await db.collection(Facility.collection).insertMany(facilities)
  console.log(`✓ ${facilities.length} facilities`)

  // ==================== VENUES ====================
  const venues = [
    new Venue({ name: 'Field A', facilityId: facilities[0].id, sportTags: ['soccer'], capacity: 200, active: true, scoreboardUrl: 'tokensports.com/scoreboard/eastside-field-a', image: 'https://placehold.co/800x400/22c55e/white?text=Field+A', tags: [new Tag({ title: 'full-size' })], pricing: { hourlyRate: '75', dailyRate: '500', cleaningFee: '50' }, metadata: { surface: 'natural-grass', dimensions: '110x70yd', lighting: 'yes', indoor: 'no' } }),
    new Venue({ name: 'Field B', facilityId: facilities[0].id, sportTags: ['soccer'], capacity: 150, active: true, scoreboardUrl: 'tokensports.com/scoreboard/eastside-field-b', image: 'https://placehold.co/800x400/22c55e/white?text=Field+B', tags: [new Tag({ title: 'half-size' })], pricing: { hourlyRate: '50', dailyRate: '350' }, metadata: { surface: 'turf', dimensions: '60x40yd', lighting: 'yes' } }),
    new Venue({ name: 'Court 1', facilityId: facilities[1].id, sportTags: ['basketball'], capacity: 300, active: true, scoreboardUrl: 'tokensports.com/scoreboard/dt-court-1', image: 'https://placehold.co/800x400/f97316/white?text=Court+1', tags: [new Tag({ title: 'regulation' })], pricing: { hourlyRate: '100', dailyRate: '700' }, metadata: { surface: 'hardwood', dimensions: '94x50ft', lighting: 'yes', indoor: 'yes' } }),
    new Venue({ name: 'Court 2', facilityId: facilities[1].id, sportTags: ['basketball', 'volleyball'], capacity: 200, active: true, image: 'https://placehold.co/800x400/f97316/white?text=Court+2', tags: [new Tag({ title: 'multi-use' })], pricing: { hourlyRate: '85', dailyRate: '600' }, metadata: { surface: 'sport-court', dimensions: '84x50ft', indoor: 'yes' } })
  ]
  await db.collection(Venue.collection).insertMany(venues)
  console.log(`✓ ${venues.length} venues`)

  // ==================== SESSIONS ====================
  const sessions = [
    new Session({ name: 'Spring 2026', orgId: orgs[0].id, startDate: '2026-03-01', endDate: '2026-06-30', type: 'regular-season', createdBy: persons[4].id, image: 'https://placehold.co/400x400/2563eb/white?text=SPR26', metadata: { registrationDeadline: '2026-02-15' } }),
    new Session({ name: 'Summer 2026', orgId: orgs[0].id, startDate: '2026-07-01', endDate: '2026-09-15', type: 'regular-season', createdBy: persons[4].id, metadata: {} }),
    new Session({ name: 'Spring Rec 2026', orgId: orgs[1].id, startDate: '2026-03-15', endDate: '2026-05-31', type: 'regular-season', createdBy: persons[0].id, image: 'https://placehold.co/400x400/16a34a/white?text=SREC26', metadata: {} })
  ]
  await db.collection(Session.collection).insertMany(sessions)
  console.log(`✓ ${sessions.length} sessions`)

  // ==================== RULESETS ====================
  const rulesets = [
    new Ruleset({ name: 'Adult Coed Soccer', preset: 'soccer', participationModel: 'team', createdBy: persons[4].id, tags: [new Tag({ title: 'coed' }), new Tag({ title: 'adult' })], metadata: { periods: '2', periodLength: '25', clockType: 'count-up', minPlayers: '7', maxPlayers: '11', femaleMinimum: '3', femaleGoalValue: '2', overtimeType: 'none', offsideRule: 'no', slideTackle: 'no' } }),
    new Ruleset({ name: 'Youth Soccer U12', preset: 'soccer', participationModel: 'team', createdBy: persons[4].id, tags: [new Tag({ title: 'youth' })], metadata: { periods: '2', periodLength: '20', clockType: 'count-up', minPlayers: '6', maxPlayers: '8', headingAllowed: 'no', buildOutLine: 'yes' } }),
    new Ruleset({ name: 'Adult Rec Basketball', preset: 'basketball', participationModel: 'team', createdBy: persons[4].id, tags: [new Tag({ title: 'adult' }), new Tag({ title: 'rec' })], metadata: { periods: '4', periodLength: '8', clockType: 'count-down', shotClock: 'none', foulLimit: '5', timeoutsPerHalf: '2', overtimeLength: '3' } })
  ]
  await db.collection(Ruleset.collection).insertMany(rulesets)
  console.log(`✓ ${rulesets.length} rulesets`)

  // ==================== LEAGUES ====================
  const leagues = [
    new League({ name: 'Adult Coed Soccer League', slug: 'adult-coed-soccer', orgId: orgs[0].id, sessionId: sessions[0].id, rulesetId: rulesets[0].id, sportType: 'soccer', participationModel: 'team', status: 'active', registrationOpen: '2026-01-15', registrationClose: '2026-02-28', createdBy: persons[4].id, image: 'https://placehold.co/400x400/2563eb/white?text=ACSL', tags: [new Tag({ title: 'coed' })], metadata: { officialPayRate: '35', maxTeams: '12', gamesPerTeam: '10' } }),
    new League({ name: 'Youth Soccer U12', slug: 'youth-u12', orgId: orgs[0].id, sessionId: sessions[0].id, rulesetId: rulesets[1].id, sportType: 'soccer', participationModel: 'team', status: 'active', registrationOpen: '2026-01-15', registrationClose: '2026-02-28', createdBy: persons[4].id, image: 'https://placehold.co/400x400/f59e0b/white?text=YU12', tags: [new Tag({ title: 'youth' })], metadata: { officialPayRate: '25', maxTeams: '8' } }),
    new League({ name: 'Spring Rec Kickball', slug: 'spring-kickball', orgId: orgs[1].id, sessionId: sessions[2].id, rulesetId: rulesets[0].id, sportType: 'kickball', participationModel: 'team', status: 'draft', createdBy: persons[0].id, tags: [new Tag({ title: 'rec' })], metadata: { officialPayRate: '20' } })
  ]
  await db.collection(League.collection).insertMany(leagues)
  console.log(`✓ ${leagues.length} leagues`)

  // ==================== DIVISIONS ====================
  const divisions = [
    new Division({ name: 'Division 1 - Competitive', leagueId: leagues[0].id, slotCount: 6, createdBy: persons[4].id, tags: [new Tag({ title: 'competitive' })], metadata: { ageMin: '18', gender: 'coed', skillTier: 'competitive' } }),
    new Division({ name: 'Division 2 - Recreational', leagueId: leagues[0].id, slotCount: 6, createdBy: persons[4].id, tags: [new Tag({ title: 'recreational' })], metadata: { ageMin: '18', gender: 'coed', skillTier: 'recreational' } }),
    new Division({ name: 'U12 Boys', leagueId: leagues[1].id, slotCount: 4, createdBy: persons[4].id, tags: [new Tag({ title: 'boys' })], metadata: { ageMin: '10', ageMax: '12', gender: 'male' } }),
    new Division({ name: 'U12 Girls', leagueId: leagues[1].id, slotCount: 4, createdBy: persons[4].id, tags: [new Tag({ title: 'girls' })], metadata: { ageMin: '10', ageMax: '12', gender: 'female' } })
  ]
  await db.collection(Division.collection).insertMany(divisions)
  console.log(`✓ ${divisions.length} divisions`)

  // ==================== TEAMS ====================
  const teams = [
    new Team({ name: 'Thunder FC', createdBy: persons[0].id, color: new ColorProfile({ primaryHex: '#2563eb', secondaryHex: '#ffffff', confirmed: true }), image: 'https://placehold.co/400x400/2563eb/white?text=TFC', tags: [new Tag({ title: 'soccer' })], metadata: {} }),
    new Team({ name: 'Phoenix Rising', createdBy: persons[4].id, color: new ColorProfile({ primaryHex: '#ea580c', secondaryHex: '#000000', confirmed: true }), image: 'https://placehold.co/400x400/ea580c/white?text=PR', tags: [new Tag({ title: 'soccer' })], metadata: {} }),
    new Team({ name: 'Green Machine', createdBy: persons[5].id, color: new ColorProfile({ primaryHex: '#16a34a', secondaryHex: '#ffffff', confirmed: true }), image: 'https://placehold.co/400x400/16a34a/white?text=GM', tags: [new Tag({ title: 'soccer' })], metadata: {} }),
    new Team({ name: 'Wildcats', createdBy: persons[6].id, color: new ColorProfile({ primaryHex: '#7c3aed', secondaryHex: '#fbbf24', confirmed: true }), image: 'https://placehold.co/400x400/7c3aed/white?text=WC', tags: [new Tag({ title: 'soccer' })], metadata: {} })
  ]
  await db.collection(Team.collection).insertMany(teams)
  console.log(`✓ ${teams.length} teams`)

  // ==================== ENROLLMENTS ====================
  const enrollments = [
    new Enrollment({ teamId: teams[0].id, divisionId: divisions[0].id, status: 'active', type: 'guaranteed', participationModel: 'team', createdBy: persons[0].id, color: new ColorProfile({ primaryHex: '#2563eb', secondaryHex: '#ffffff', confirmed: true }), metadata: {} }),
    new Enrollment({ teamId: teams[1].id, divisionId: divisions[0].id, status: 'active', type: 'guaranteed', participationModel: 'team', createdBy: persons[4].id, color: new ColorProfile({ primaryHex: '#ea580c', secondaryHex: '#000000', confirmed: true }), metadata: {} }),
    new Enrollment({ teamId: teams[2].id, divisionId: divisions[1].id, status: 'active', type: 'guaranteed', participationModel: 'team', createdBy: persons[5].id, metadata: {} }),
    new Enrollment({ teamId: teams[3].id, divisionId: divisions[1].id, status: 'applied', type: 'reserve', participationModel: 'team', createdBy: persons[6].id, metadata: {} })
  ]
  await db.collection(Enrollment.collection).insertMany(enrollments)
  console.log(`✓ ${enrollments.length} enrollments`)

  // ==================== ROSTERS ====================
  const rosters = [
    new Roster({ teamId: teams[0].id, enrollmentId: enrollments[0].id, createdBy: persons[0].id, metadata: {} }),
    new Roster({ teamId: teams[1].id, enrollmentId: enrollments[1].id, createdBy: persons[4].id, metadata: {} }),
    new Roster({ teamId: teams[2].id, enrollmentId: enrollments[2].id, createdBy: persons[5].id, metadata: {} })
  ]
  await db.collection(Roster.collection).insertMany(rosters)
  console.log(`✓ ${rosters.length} rosters`)

  // ==================== PARTICIPATIONS ====================
  const participations = [
    new Participation({ rosterId: rosters[0].id, personId: persons[0].id, jerseyNumber: 10, positions: ['midfielder'], role: 'starter', status: 'confirmed', confirmedAt: '2026-02-20T10:00:00Z', splitEven: true, metadata: {} }),
    new Participation({ rosterId: rosters[0].id, personId: persons[2].id, jerseyNumber: 1, positions: ['goalkeeper'], role: 'starter', status: 'confirmed', confirmedAt: '2026-02-20T11:00:00Z', splitEven: true, metadata: {} }),
    new Participation({ rosterId: rosters[0].id, personId: persons[5].id, jerseyNumber: 9, positions: ['forward'], role: 'starter', status: 'confirmed', splitEven: true, metadata: {} }),
    new Participation({ rosterId: rosters[0].id, personId: persons[6].id, jerseyNumber: 4, positions: ['defender'], role: 'sub', status: 'confirmed', splitEven: true, metadata: {} }),
    new Participation({ rosterId: rosters[0].id, personId: persons[8].id, jerseyNumber: 7, positions: ['winger'], role: 'starter', status: 'invited', splitEven: true, metadata: {} }),
    new Participation({ rosterId: rosters[0].id, personId: persons[3].id, jerseyNumber: 11, positions: ['forward'], status: 'polled', manualEntry: true, createdBy: persons[0].id, splitEven: true, metadata: { stubNote: 'Emily from pickup game' } }),
    new Participation({ rosterId: rosters[1].id, personId: persons[4].id, jerseyNumber: 5, positions: ['midfielder', 'defender'], role: 'starter', status: 'confirmed', splitEven: true, metadata: {} }),
    new Participation({ rosterId: rosters[2].id, personId: persons[5].id, jerseyNumber: 9, positions: ['forward'], role: 'starter', status: 'confirmed', splitEven: true, metadata: {} })
  ]
  await db.collection(Participation.collection).insertMany(participations)
  console.log(`✓ ${participations.length} participations`)

  // ==================== ROTATION GROUPS ====================
  const rotationGroups = [
    new RotationGroup({ rosterId: rosters[0].id, name: 'Female Rotation', createdBy: persons[0].id, metadata: { subIntervalMinutes: '8', playersInGame: persons[5].id, playersOnDeck: persons[3].id } }),
    new RotationGroup({ rosterId: rosters[0].id, name: 'Defense Rotation', createdBy: persons[0].id, metadata: { subIntervalMinutes: '10', playersInGame: persons[6].id } })
  ]
  await db.collection(RotationGroup.collection).insertMany(rotationGroups)
  console.log(`✓ ${rotationGroups.length} rotation_groups`)

  // ==================== GAMES ====================
  const games = [
    new Game({ divisionId: divisions[0].id, homeEnrollmentId: enrollments[0].id, awayEnrollmentId: enrollments[1].id, venueId: venues[0].id, scheduledAt: '2026-03-22T14:00:00Z', status: 'complete', createdBy: persons[4].id, image: 'https://placehold.co/800x400/2563eb/white?text=TFC+vs+PR', metadata: { kitConflict: 'false' } }),
    new Game({ divisionId: divisions[0].id, homeEnrollmentId: enrollments[1].id, awayEnrollmentId: enrollments[0].id, venueId: venues[0].id, scheduledAt: '2026-03-29T14:00:00Z', status: 'scheduled', createdBy: persons[4].id, metadata: {} }),
    new Game({ divisionId: divisions[0].id, homeEnrollmentId: enrollments[0].id, awayEnrollmentId: enrollments[1].id, venueId: venues[1].id, scheduledAt: '2026-04-05T16:00:00Z', status: 'scheduled', createdBy: persons[4].id, metadata: {} })
  ]
  await db.collection(Game.collection).insertMany(games)
  console.log(`✓ ${games.length} games`)

  // ==================== GAME RECORDS ====================
  const gameRecords = [
    new GameRecord({ gameId: games[0].id, scoreHome: 3, scoreAway: 1, verifiedBy: persons[1].id, verifiedAt: '2026-03-22T16:00:00Z', createdBy: persons[1].id, metadata: { forfeit: 'false', periods: '2' } })
  ]
  await db.collection(GameRecord.collection).insertMany(gameRecords)
  console.log(`✓ ${gameRecords.length} game_records`)

  // ==================== EVENTS ====================
  const events = [
    new Event({ entityType: 'game', entityId: games[0].id, type: 'game.score', actorId: persons[6].id, source: 'scorekeeper', layer: 'master', timestamp: '2026-03-22T14:12:00Z', metadata: { team: 'home', player: persons[0].id, method: 'open-play', period: '1', gameClock: '12:00' } }),
    new Event({ entityType: 'game', entityId: games[0].id, type: 'game.score', actorId: persons[6].id, source: 'scorekeeper', layer: 'master', timestamp: '2026-03-22T14:20:00Z', metadata: { team: 'home', player: persons[5].id, method: 'header', period: '1', gameClock: '20:00', femaleGoal: 'true', points: '2' } }),
    new Event({ entityType: 'game', entityId: games[0].id, type: 'game.score', actorId: persons[6].id, source: 'scorekeeper', layer: 'master', timestamp: '2026-03-22T14:35:00Z', metadata: { team: 'away', player: persons[4].id, method: 'free-kick', period: '2', gameClock: '10:00' } }),
    new Event({ entityType: 'game', entityId: games[0].id, type: 'game.foul', actorId: persons[1].id, source: 'referee', layer: 'master', timestamp: '2026-03-22T14:33:00Z', metadata: { team: 'away', player: persons[4].id, cardType: 'yellow', period: '2', gameClock: '8:00' } }),
    new Event({ entityType: 'game', entityId: games[0].id, type: 'game.sub', actorId: persons[6].id, source: 'scorekeeper', layer: 'master', timestamp: '2026-03-22T14:25:00Z', metadata: { team: 'home', playerOut: persons[6].id, playerIn: persons[8].id, period: '2', gameClock: '0:00' } }),
    new Event({ entityType: 'game', entityId: games[0].id, type: 'game.period', actorId: persons[1].id, source: 'referee', layer: 'master', timestamp: '2026-03-22T14:25:00Z', metadata: { period: '2', action: 'start' } }),
    new Event({ entityType: 'payment', entityId: persons[0].id, type: 'payment.credit', actorId: persons[0].id, source: 'system', layer: 'master', metadata: { amount: '150', purpose: 'league-dues', method: 'card' } }),
    new Event({ entityType: 'person', entityId: persons[3].id, type: 'person.claimed', actorId: persons[3].id, source: 'system', layer: 'master', metadata: { previousStubCreatedBy: persons[0].id } })
  ]
  await db.collection(Event.collection).insertMany(events)
  console.log(`✓ ${events.length} events`)

  // ==================== GAME ASSIGNMENTS ====================
  const gameAssignments = [
    new GameAssignment({ gameId: games[0].id, personId: persons[1].id, assignmentType: 'official', role: 'center-referee', payRate: 35, status: 'confirmed', confirmedAt: '2026-03-20T10:00:00Z', metadata: {} }),
    new GameAssignment({ gameId: games[0].id, personId: persons[11].id, assignmentType: 'official', role: 'assistant-referee', payRate: 25, status: 'confirmed', confirmedAt: '2026-03-20T12:00:00Z', metadata: {} }),
    new GameAssignment({ gameId: games[0].id, personId: persons[6].id, assignmentType: 'scorekeeper_league', role: 'score', subRole: 'master', status: 'confirmed', checkedInAt: '2026-03-22T13:45:00Z', metadata: { moduleLayout: 'soccer-default' } }),
    new GameAssignment({ gameId: games[1].id, personId: persons[1].id, assignmentType: 'official', role: 'center-referee', payRate: 35, status: 'pending', metadata: {} })
  ]
  await db.collection(GameAssignment.collection).insertMany(gameAssignments)
  console.log(`✓ ${gameAssignments.length} game_assignments`)

  // ==================== PAYMENTS ====================
  const payments = [
    new Payment({ amount: 150, paymentMethod: 'card', integrated: true, purpose: 'league-dues', status: 'confirmed', confirmedAt: '2026-02-15T10:00:00Z', fromEntityType: 'person', fromEntityId: persons[0].id, toEntityType: 'organization', toEntityId: orgs[0].id, platformFee: 7.5, netAmount: 142.5, stripePaymentId: 'pi_test_001', metadata: { season: sessions[0].id, team: teams[0].id } }),
    new Payment({ amount: 150, paymentMethod: 'cash', integrated: false, purpose: 'league-dues', status: 'confirmed', confirmedAt: '2026-02-16T14:00:00Z', fromEntityType: 'person', fromEntityId: persons[2].id, toEntityType: 'person', toEntityId: persons[0].id, metadata: { season: sessions[0].id, team: teams[0].id, receiptType: 'cash-receipt' } }),
    new Payment({ amount: 35, paymentMethod: 'platform-credit', integrated: true, purpose: 'official-pay', status: 'pending', fromEntityType: 'organization', fromEntityId: orgs[0].id, toEntityType: 'person', toEntityId: persons[1].id, metadata: { gameId: games[0].id, role: 'center-referee' } }),
    new Payment({ amount: 300, paymentMethod: 'cash', integrated: false, purpose: 'cash-handoff', status: 'confirmed', confirmedAt: '2026-03-01T09:00:00Z', fromEntityType: 'person', fromEntityId: persons[0].id, toEntityType: 'organization', toEntityId: orgs[0].id, metadata: { receiptCount: '2', note: 'Feb dues collection' } })
  ]
  await db.collection(Payment.collection).insertMany(payments)
  console.log(`✓ ${payments.length} payments`)

  // ==================== TRANSACTIONS ====================
  const transactions = [
    new Transaction({ type: 'roster_invite', senderId: persons[0].id, recipientId: persons[8].id, status: 'pending', message: 'We need a winger — interested in joining Thunder FC?', metadata: { teamId: teams[0].id, rosterId: rosters[0].id, position: 'winger' } }),
    new Transaction({ type: 'season_confirmation', senderId: persons[0].id, recipientId: persons[5].id, status: 'confirmed', confirmedAt: '2026-02-20T10:00:00Z', metadata: { enrollmentId: enrollments[0].id } }),
    new Transaction({ type: 'official_assignment', senderId: persons[4].id, recipientId: persons[1].id, status: 'confirmed', confirmedAt: '2026-03-20T10:00:00Z', metadata: { gameId: games[0].id, role: 'center-referee', payRate: '35' } }),
    new Transaction({ type: 'free_agent_request', senderId: persons[8].id, recipientId: persons[0].id, status: 'pending', message: 'Looking for a team this spring — play winger/forward', metadata: { position: 'winger', skillLevel: 'competitive' } })
  ]
  await db.collection(Transaction.collection).insertMany(transactions)
  console.log(`✓ ${transactions.length} transactions`)

  // ==================== MEDIA ====================
  const mediaItems = [
    new Media({ entityType: 'game', entityId: games[0].id, type: 'photo', url: 'https://placehold.co/800x600/2563eb/white?text=Game+Action+1', uploadedBy: persons[6].id, visible: true, tags: [new Tag({ title: 'action' })], metadata: { timestampInGame: '14:12', taggedPlayers: persons[0].id } }),
    new Media({ entityType: 'game', entityId: games[0].id, type: 'photo', url: 'https://placehold.co/800x600/ea580c/white?text=Game+Action+2', uploadedBy: persons[10].id, visible: true, tags: [new Tag({ title: 'celebration' })], metadata: { timestampInGame: '14:20' } }),
    new Media({ entityType: 'facility', entityId: facilities[0].id, type: 'photo', url: 'https://placehold.co/800x600/0891b2/white?text=Facility+Aerial', uploadedBy: persons[7].id, visible: true, tags: [new Tag({ title: 'aerial' })], metadata: {} })
  ]
  await db.collection(Media.collection).insertMany(mediaItems)
  console.log(`✓ ${mediaItems.length} media`)

  // ==================== CONTENT ====================
  const contentItems = [
    new Content({ entityType: 'organization', entityId: orgs[0].id, type: 'info-post', section: 'feed', title: 'Spring Season Registration Open!', published: true, createdBy: persons[4].id, slug: 'spring-registration-open', category: ['announcement'], image: 'https://placehold.co/800x400/2563eb/white?text=Registration+Open', metadata: { body: 'Registration for Spring 2026 is now open. Sign up before Feb 28!' } }),
    new Content({ entityType: 'organization', entityId: orgs[0].id, type: 'info-post', section: 'permanent', title: 'League Rules & Code of Conduct', published: true, createdBy: persons[4].id, slug: 'rules-code-of-conduct', category: ['rules'], metadata: { body: 'All players must abide by the code of conduct...' } }),
    new Content({ entityType: 'platform', entityId: null, type: 'doc', section: 'permanent', title: 'Getting Started as an Org Admin', published: true, slug: 'getting-started-org-admin', category: ['org-admin', 'onboarding'], metadata: { body: 'Welcome to TokenSports! Here is how to set up your organization...' } })
  ]
  await db.collection(Content.collection).insertMany(contentItems)
  console.log(`✓ ${contentItems.length} content`)

  // ==================== RELATIONSHIPS ====================
  const relationships = [
    new Relationship({ personId: persons[4].id, entityType: 'organization', entityId: orgs[0].id, relationshipType: 'staff', role: 'org-admin', status: 'active', metadata: {} }),
    new Relationship({ personId: persons[0].id, entityType: 'team', entityId: teams[0].id, relationshipType: 'staff', role: 'team-manager', status: 'active', metadata: {} }),
    new Relationship({ personId: persons[4].id, entityType: 'team', entityId: teams[1].id, relationshipType: 'staff', role: 'team-manager', status: 'active', metadata: {} }),
    new Relationship({ personId: persons[1].id, entityType: 'organization', entityId: orgs[0].id, relationshipType: 'official', role: 'center-referee', status: 'active', metadata: { availableDays: 'sat,sun', maxGamesPerDay: '3' } }),
    new Relationship({ personId: persons[11].id, entityType: 'organization', entityId: orgs[0].id, relationshipType: 'official', role: 'assistant-referee', status: 'active', metadata: {} }),
    new Relationship({ personId: persons[10].id, entityType: 'person', entityId: persons[9].id, relationshipType: 'guardian', role: 'primary', status: 'active', metadata: { confirmationMode: 'on-behalf' } }),
    new Relationship({ personId: persons[8].id, entityType: 'team', entityId: teams[0].id, relationshipType: 'follow', status: 'active', metadata: {} }),
    new Relationship({ personId: persons[7].id, entityType: 'facility', entityId: facilities[0].id, relationshipType: 'staff', role: 'facility-manager', status: 'active', metadata: {} })
  ]
  await db.collection(Relationship.collection).insertMany(relationships)
  console.log(`✓ ${relationships.length} relationships`)

  // ==================== GUEST PASSES ====================
  const guestPasses = [
    new GuestPass({ orgId: orgs[0].id, officialType: 'assistant-referee', scope: 'game', gameId: games[1].id, payRate: 25, status: 'pending', createdBy: persons[4].id, accessLink: 'https://tokensports.com/guest/abc123', metadata: {} })
  ]
  await db.collection(GuestPass.collection).insertMany(guestPasses)
  console.log(`✓ ${guestPasses.length} guest_passes`)

  // ==================== FLAGS ====================
  const flags = [
    new Flag({ entityType: 'content', entityId: contentItems[0].id, type: 'outdated', reason: 'Registration deadline has passed', createdBy: persons[5].id, status: 'pending', metadata: {} })
  ]
  await db.collection(Flag.collection).insertMany(flags)
  console.log(`✓ ${flags.length} flags`)

  // ==================== NOTIFICATIONS ====================
  const notifications = [
    new Notification({ recipientId: persons[8].id, type: 'roster-invite', title: 'Team Invite', message: 'Marcus Johnson invited you to Thunder FC', entityType: 'transaction', entityId: transactions[0].id, channel: 'push', metadata: {} }),
    new Notification({ recipientId: persons[1].id, type: 'game-assignment', title: 'New Game Assignment', message: 'You have been assigned to referee Thunder FC vs Phoenix Rising', entityType: 'game', entityId: games[1].id, channel: 'push', metadata: {} }),
    new Notification({ recipientId: persons[0].id, type: 'free-agent-request', title: 'Free Agent Request', message: 'Brian Kim is interested in joining your team', entityType: 'transaction', entityId: transactions[3].id, channel: 'push', metadata: {} })
  ]
  await db.collection(Notification.collection).insertMany(notifications)
  console.log(`✓ ${notifications.length} notifications`)

  // ==================== MODULES ====================
  const modules = [
    new Module({ name: 'Game Clock', type: 'clock', preset: 'universal', image: 'https://placehold.co/200x200/334155/white?text=Clock', tags: [new Tag({ title: 'universal' })], metadata: { clockType: 'count-up', countDown: 'true', stoppable: 'true', periodAware: 'true' } }),
    new Module({ name: 'Score Counter', type: 'score', preset: 'universal', image: 'https://placehold.co/200x200/334155/white?text=Score', tags: [new Tag({ title: 'universal' })], metadata: { increment: '1', decrement: 'true', attribution: 'true' } }),
    new Module({ name: 'Foul Tracker', type: 'foul', preset: 'soccer', image: 'https://placehold.co/200x200/eab308/white?text=Fouls', tags: [new Tag({ title: 'soccer' })], metadata: { cardTypes: 'yellow,red', playerAttribution: 'true' } }),
    new Module({ name: 'Shot Clock', type: 'shot-clock', preset: 'basketball', image: 'https://placehold.co/200x200/f97316/white?text=Shot', tags: [new Tag({ title: 'basketball' })], metadata: { defaultSeconds: '24', resetOnPossession: 'true' } }),
    new Module({ name: 'Substitution Tracker', type: 'sub', preset: 'universal', image: 'https://placehold.co/200x200/334155/white?text=Subs', tags: [new Tag({ title: 'universal' })], metadata: { playerIn: 'true', playerOut: 'true', timestamped: 'true' } }),
    new Module({ name: 'Period Tracker', type: 'period', preset: 'universal', image: 'https://placehold.co/200x200/334155/white?text=Period', tags: [new Tag({ title: 'universal' })], metadata: { periodTypes: 'half,quarter,inning,period,set', customizable: 'true' } }),
    new Module({ name: 'Timeout Tracker', type: 'timeout', preset: 'basketball', image: 'https://placehold.co/200x200/f97316/white?text=TO', tags: [new Tag({ title: 'basketball' })], metadata: { perHalf: '2', duration: '60' } })
  ]
  await db.collection(Module.collection).insertMany(modules)
  console.log(`✓ ${modules.length} modules`)

  // ==================== VERIFICATION ====================
  console.log('\n--- Collection Counts ---')
  for (const c of collections) {
    const count = await db.collection(c).countDocuments()
    console.log(`  ${c}: ${count}`)
  }

  await client.close()
  console.log('\n✓ Full seed complete')
}

seed().catch(console.error)
