import React from 'react'
import PropTypes from 'prop-types'

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

function VideoCard({ title, description, thumbnail, videoId }) {
  const classes = useStyles()

  console.log({ title, description, thumbnail, videoId })

  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <div className={classes.content}>
        <Typography>{description}</Typography>
        <Button fullWidth color="primary">
          Ver vídeo
        </Button>
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired
}

export default VideoCard
