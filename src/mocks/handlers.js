/* eslint-disable import/prefer-default-export */
import { graphql } from "msw"

export const handlers = [
  graphql.mutation("CreateEvent", (req, res, ctx) => {
    return res(
      ctx.data({
        createEvent: {
          id: 1,
          slug: "my-new-event",
        },
      })
    )
  }),
  graphql.query("listProjects", (req, res, ctx) => {
    return res(
      ctx.data({
        projects: [
          {
            title: "Autograder",
            id: 64,
            slug: "autograder",
          },
          {
            title: "WebsiteOne",
            id: 65,
            slug: "websiteone",
          },
        ],
      })
    )
  }),
  graphql.query("listEvents", (req, res, ctx) => {
    return res(
      ctx.data({
        upcomingEvents: [
          {
            event: {
              id: "246",
              name: "BigEvent1",
              repeats: "weekly",
              startDatetime: "2020-12-05T06:45:37Z",
              timeZone: "UTC",
              duration: 8,
              category: "Scrum",
              description: null,
              slug: "bigevent1",
            },
            time: "2020-12-08T06:45:37Z",
          },
          {
            event: {
              id: "247",
              name: "BigEvent2",
              repeats: "weekly",
              startDatetime: "2020-12-05T06:55:04Z",
              timeZone: "UTC",
              duration: 2,
              category: "Scrum",
              description: null,
              slug: "bigevent2",
            },
            time: "2020-12-08T06:55:04Z",
          },
          {
            event: {
              id: "248",
              name: "BigEvent3",
              repeats: "weekly",
              startDatetime: "2020-12-05T07:52:51Z",
              timeZone: "UTC",
              duration: 4,
              category: "PairProgramming",
              description: null,
              slug: "bigevent3",
            },
            time: "2020-12-08T07:52:51Z",
          },
        ],
      })
    )
  }),
]
