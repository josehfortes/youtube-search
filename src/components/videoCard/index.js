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
    height: '180px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  content: {
    padding: theme.spacing(1)
  }
}))

function VideoCard({ title, description, thumbnail, videoId }) {
  const classes = useStyles()

  function openYoutubeVideo() {
    window.open(`https://youtube.com/watch?v=${videoId}`, '_blank').focus()
  }

  return (
    <div className={classes.root}>
      <div className={classes.header} style={{ backgroundImage: `url(${thumbnail})` }}></div>
      <div className={classes.content}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="caption">{description}</Typography>
        <Button fullWidth color="primary" onClick={openYoutubeVideo}>
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
