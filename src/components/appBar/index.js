import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SearchInput from '../input/searchInput'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

function NavBar({ search, setSearch }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Youtube Search
          </Typography>
          <div>
            <SearchInput placeholder="Procure um vídeo" value={search} onChange={setSearch} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
}

export default NavBar
