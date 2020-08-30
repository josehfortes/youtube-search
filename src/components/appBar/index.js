import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

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

function NavBar({ setSearch }) {
  const classes = useStyles()
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInput = (value) => {
    setSearchInput(value)
    debounceSetSearch(value)
  }

  const debounceSetSearch = useCallback(_.debounce(setSearch, 2000), [])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Youtube Search
          </Typography>
          <div>
            <SearchInput
              placeholder="Procure um vídeo"
              value={searchInput}
              onChange={handleSearchInput}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  setSearch: PropTypes.func.isRequired
}

export default NavBar
