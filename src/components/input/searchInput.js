import React from 'react'

import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroudColor: fade(theme.palette.common.white, 0.3)
    },
    marginLeft: 0,
    width: '100%'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: 'absolute',
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`
  }
}))

export default function SearchInput() {
  const classes = useStyles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Procure por vídeos..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  )
}
