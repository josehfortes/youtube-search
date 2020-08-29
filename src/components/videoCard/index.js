import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    height: '200px'
  },
  content: {
    padding: theme.spacing(1)
  }
}))

function VideoCard() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <div className={classes.content}>
        <Typography>Content dasdasd sad sadsadsad asdsa dsad as...</Typography>
        <Button fullWidth color="primary">
          Ver vídeo
        </Button>
      </div>
    </div>
  )
}

export default VideoCard
