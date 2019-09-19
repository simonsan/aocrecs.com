import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import UserIcon from 'mdi-react/AccountIcon'

import AppLink from './util/AppLink'
import CardIconHeader from './util/CardIconHeader'

const User = ({user}) => {
  return (
    <Card>
      <CardIconHeader
        icon={<UserIcon />}
        title={user.name}
      />
      <CardContent>
        <Table>
          <TableBody>
            {user.meta_ranks.map(rank => (
              <TableRow key={rank.ladder.id}>
                <TableCell>
                  <AppLink path={['ladders', rank.ladder.id]} text={rank.ladder.name} />
                </TableCell>
                <TableCell>#{rank.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default User