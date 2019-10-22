import { GraphQLScalarType } from 'graphql'
import { IResolvers } from 'apollo-server-koa'

export const commonResolvers: IResolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: `The \`Date\` scalar type represents a date and time in the UTC timezone. The DateTime appears in a JSON response as an ISO8601 formatted string, including UTC timezone ("Z"). The parsed date and time string will be converted to UTC and any UTC offset other than 0 will be rejected.`,
        parseValue(value: Date): number {
            return value.getTime()
        },
        serialize(value: number): Date {
            return new Date(value)
        },
    }),
}
