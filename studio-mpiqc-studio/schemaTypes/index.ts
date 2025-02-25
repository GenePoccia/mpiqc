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

export const schemaTypes = [
  //pages
  navigation,
  welcomePage,
  whoWeAre,
  ourCapabilities,
  certifications,
  locations,
  industries,
  whyUs,
  meetTheTeam,
  contactUs,
  //reusable
  magazine,
]
