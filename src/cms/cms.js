import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import blogPostStyles from '!css-loader!sass-loader!../components/BlogPost.scss'

CMS.registerPreviewStyle(blogPostStyles.toString(), { raw: true })

CMS.registerPreviewTemplate('blogEn', BlogPostPreview)
CMS.registerPreviewTemplate('blogDe', BlogPostPreview)
