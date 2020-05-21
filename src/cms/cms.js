import CMS from 'netlify-cms-app'

import NotePreview from './preview-templates/NotePreview'

CMS.registerPreviewTemplate('noteEn', NotePreview)
CMS.registerPreviewTemplate('noteDe', NotePreview)
