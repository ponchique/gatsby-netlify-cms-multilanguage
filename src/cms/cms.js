import CMS from 'netlify-cms-app'

import NotePreview from './preview-templates/NotePreview'
import NoteStyles from '!css-loader!sass-loader!../components/Note.scss'

CMS.registerPreviewStyle(NoteStyles.toString(), { raw: true })

CMS.registerPreviewTemplate('noteEn', NotePreview)
CMS.registerPreviewTemplate('noteDe', NotePreview)
