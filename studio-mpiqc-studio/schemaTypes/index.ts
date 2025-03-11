import {navigation} from './navigation'
import {welcomePage} from './welcomePage'
import {whoWeAre} from './whoWeAre'
import {magazine} from './reusableSchemas/magazine'
import {ourCapabilities} from './ourCapabilities'
import {certifications} from './certifications'
import {locations} from './locations'
import {industries} from './industries'
import {whyUs} from './whyUs'
import {meetTheTeam} from './meetTheTeam'
import {contactUs} from './contactUs'
import {footer} from './footer'
import {blogPost} from './blogPost'
import {blogSection} from './blogSection'

export const schemaTypes = [
  //pages
  navigation,
  welcomePage,
  whoWeAre,
  ourCapabilities,
  certifications,
  blogSection,
  locations,
  industries,
  whyUs,
  meetTheTeam,
  contactUs,
  footer,
  blogPost,
  //reusable
  magazine,
]
