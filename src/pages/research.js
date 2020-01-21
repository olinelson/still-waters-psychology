import React, { useRef } from "react";
import { Jumbotron } from "../components/StyledComponents";
import {
    Container,
    Divider,
    Table,
    Label,
    Tab,
    Responsive,
    Header
} from "semantic-ui-react";
import purpleFlower from '../images/resources/image_7_Purple_flower.jpg'
import Layout from '../components/layout'
import ResponsiveTabs from "../components/ResponsiveTabs";

export default function Research() {
   

    const articles = () => {
        return (
            <>
                <Table celled>
                    <Table.Header>
                        <Table.Row verticalAlign='top'>
                            <Table.HeaderCell>Year</Table.HeaderCell>
                            <Table.HeaderCell>Publication Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row verticalAlign='top'>
                            <Table.Cell>
                                <Label ribbon>2019</Label>
                            </Table.Cell>
                            <Table.Cell>
                                Holt, R., Kornhaber, R.A., Kwiet, J., Shaw, J., Law, J.,
                                Proctor, M-T., Vandervord, J., Streimer, J., Visentin, D.C.,
                                Cleary, M., & McLean L. Insecure adult attachment style is
                                associated with elevated psychological symptoms in early
                                adjustment to severe burn injury: A cross sectional study.
                                Burns, 45 (6), 1359-1366. DOI: doi:10.1016/j.burns.2019.03.011
              </Table.Cell>
                        </Table.Row>

                        <Table.Row verticalAlign='top'>
                            <Table.Cell>
                                <Label ribbon>2018</Label>
                            </Table.Cell>
                            <Table.Cell>
                                Proctor, M-T., Cleary, M., Kornhaber, R., & McLean, L. (2019).
                                Christians with chronic complex trauma and relationally-focused
                                spiritual difficulties: A Conversational Model perspective.
                                Journal of Spirituality in Mental Health, 21 (2), pp. 1-34. DOI:
                                10.1080/19349637.2018.1460228.
              </Table.Cell>
                        </Table.Row>

                        <Table.Row verticalAlign='top'>
                            <Table.Cell>
                                <Label ribbon>2015</Label>
                            </Table.Cell>
                            <Table.Cell>
                                McLean, L.M., Rogers, V., Kornhaber, R., Proctor, M-T., Kwiet,
                                J., Streimer, J., & Vandervord, J. (2015). The patient-body
                                relationship and the 'lived experience" of a facial burn injury:
                                a phenomenological inquiry of early psychosocial adjustment.
                                Journal of Multidisciplinary Healthcare, 8, 377-387. doi:
                                10.2147/JMDH.S89375. eCollection 2015.
              </Table.Cell>
                        </Table.Row>

                        <Table.Row verticalAlign='top'>
                            <Table.Cell>
                                <Label ribbon>2013</Label>
                            </Table.Cell>
                            <Table.Cell>
                                Bonab, B.G., Miner, M., & Proctor, M.T. (2013). Attachment to
                                God in Islamic spirituality. Journal of Muslim Mental Health, 7
                                (2), 77-104. McLean, L., Kuiper, S., Kozlowska, K., Proctor,
                                M-T., & Malhi. (2013). Changing minds, changing brains, changing
                                bodies: Attachment research as a model for biopsychosocial
                                research and integrated care. Australian & New Zealand Journal
                                of Psychiatry, 47(S1), 30-31.
              </Table.Cell>
                        </Table.Row>
                        <Table.Row verticalAlign='top'>
                            <Table.Cell>
                                <Label ribbon>2012</Label>
                            </Table.Cell>
                            <Table.Cell>
                                Miner, M., Dowson, M., Ghobary, B. & Proctor, M.T. (2012).
                                Spiritual attachment in Islam and Christianity. Mental Health,
                                Religion and Culture, pp. 1-15, DOI:
                                10.1080/13674676.2012.749452.
              </Table.Cell>
                        </Table.Row>

                        <Table.Row verticalAlign='top'>
                            <Table.Cell>
                                <Label ribbon>2009</Label>
                            </Table.Cell>
                            <Table.Cell>
                                <p>
                                    Proctor, M-T. (2009). In sickness and in health: Including the
                                    spiritual domain as an aspect of psychological assessment.
                                    ‘InPsych’ - The Bulletin of the Australian Psychological
                                    Society Ltd., Cover Feature: Psychology, spirituality &
                                    Religion, APS: Melbourne, August 2009, pp.14-15.
                </p>
                                <p>
                                    Proctor, M-T. (2009). The Life-Limiting Conditions Project. In
                                    The Psycho-Social Review , International Program for
                                    Psycho-Social Health Research, Central Queensland University,
                                    Volume 4 (2),
                  http://www.ipp-shr.cqu.edu.au/enews/psu/02040809/cf/{" "}
                                </p>
                                <p>
                                    Proctor, M-T., Miner, M., McLean, L., Devenish, S., &
                                    Ghobary-Bonab, B. (2009). Exploring Christians’ explicit
                                    attachment to God representations: The development of a
                                    template for assessing ATG experiences. Journal of Psychology
                                    & Theology, 37 (4), 245-264.
                </p>
                                <p>
                                    Stevens, M., Lord, B., Proctor, M.T., Nagy, S., & O’Riordan,
                                    E. (2009). Research with vulnerable families caring for
                                    children with life-limiting conditions. Qualitative Health
                                    Research, 20 (4), 496-505.
                </p>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        );
    };

    const bookChapters = () => {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row verticalAlign='top'>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Publication Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2017</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. (2017). The lively self: Fostering the psychological
                            and spiritual health and well being in student actors. In Miner,
                            M. & Dowson, M. (Eds.) Creativity and Spirituality: A
                            multidisciplinary perspective. Charlotte, North Carolina:
                            Information Age Publishing.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2013</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                McLean, L., Proctor, M-T., Rogers. V., Shaw, J., Kwiet, J.,
                                Streimer, J., Vandervord, J., & Kasia Kowlowska, K. (2013).
                                Secure Attachment To God And A Secure/Comfortable Attachment
                                Organization May Promote Healthy Recovery From Severe Burns
                                Injury. Chapter 10. In John L. Hochheimer & Jane
                                Fernandez-Goldborough (Eds), Spirituality in the 21st Century:
                Conversation. Inter-Disciplinary Press.{" "}
                            </p>
                            <p>
                                McLean, L., & Proctor, M-T. (2013). The pilgrim road to human
                                flourishing: When the psychotherapeutic and the spiritual
                                journey meet. In M. H. Miner, M. Dowson & S. Devenish (Eds).
                                Beyond well -being: Spirituality and Human Flourishing,
                                Information Age Press: Charlotte, NC.
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2012</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor M-T, McLean L, Miner-Bridges M, Dowson M, Devenish S.
                                (2012). Exploring the Psycho-Spiritual construct ‘Attachment to
                                God’: The contribution of Australian researchers. Peer-reviewed
                                paper presented at the Spirituality in the 21st Century: At the
                                Interface of Theory, Praxis and Pedagogy 1st Global Conference,
                                Prague, Czech Republic, March 2011, an E-book Chapter of
                                conference proceedings in Martin Fowler, John D. Martin III and
                                John L. Hochheimer (Eds). Spirituality: Theory, Praxis and
                                Pedagogy,.Inter-Disciplinary Press: Oxford, UK.
                                https://www.interdisciplinarypress.net/online-store/ebooks/ethos-and-modern-life/spirituality-theory-praxis-and-pedagogy
                                ).
              </p>
                            <p>
                                McLean L, Proctor M-T, Kwiet J, Streimer J, Vandervord J, Shaw
                                J, Kowlowska, K. (2012). Secure attachment to God and a secure/
                                comfortable attachment organization may both promote healthy
                                recovery from severe burns injury. Peer-reviewed paper presented
                                at the Spirituality in the 21st Century: At the Interface of
                                Theory, Praxis and Pedagogy 1st Global Conference, Prague, Czech
                                Republic, March 2011, and E-book Chapter of conference
                                proceedings in Martin Fowler, John D. Martin III and John L.
                                Hochheimer (Eds). Spirituality: Theory, Praxis and Pedagogy,
                                2012.Inter-Disciplinary Press: Oxford, UK.
                                https://www.interdisciplinarypress.net/online-store/ebooks/ethos-and-modern-life/spirituality-theory-praxis-and-pedagogy).
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2011</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M. (2011). ‘A delicate balance’: The intersection of the
                            spiritual and psychological in healthcare. E-Chapter appearing in
                            the conference proceedings of the Spirituality in the 21st
                            Century: At the Interface of Theory, Praxis and Pedagogy, 1st
                            Global Conference: Sunday March 2011, Prague, Czech Republic.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2010</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Stevens, M.M., Rytmeister, R.J., Proctor, M-T., & Bolster, P.
                            (2010). Children with life-threatening or life-limiting illnesses:
                            A dispatch from the frontlines. In C.A. Corr, C. A., & D.E. Balk
                            (Eds.) Children’s encounters with death, bereavement, and coping.
                            New York: Springer.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2009</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. & McLean, L. (2009). Reviewing the place of the
                            spiritual domain in the clinical and psychotherapeutic setting:
                            Framing and assessing issues within an attachment perspective. In
                            M. Miner, M-T. Proctor & M. Dowson (Eds). Spirituality in
                            Australia, Volume 2: Directions and Applications, ACSS/CHILD:
                            Sydney. pp. 90-110.
            </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

    const editedMonograph = () => {
        return (
            <Table>
                <Table.Header>
                    <Table.Row verticalAlign='top'>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Publication Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2009</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Miner, M., Proctor, M-T., & Dowson, M. (Eds) (2009). Spirituality
                            in Australia, Volume 2: Directions and Applications, ACSS/CHILD:
                            Sydney.
            </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

    const publicPeerReviewAbstracts = () => {
        return (
            <Table>
                <Table.Header>
                    <Table.Row verticalAlign='top'>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Publication Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2009</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M.T. (2009). Conversations about God: Spirituality and
                                qualitative research approaches not so strange bedfellows. AQM
                                2008 Conference Abstracts. International Journal of Qualitative
                Methods, 8 (3), 17.{" "}
                            </p>
                            <p>
                                Proctor, M.T. (2009). “On the outside looking in”: Reflections
                                on working with vulnerable populations and with challenging
                                topics. AQM 2008 Conference Abstracts. International Journal of
                Qualitative Methods, 8 (3), 26.{" "}
                            </p>
                            <p>
                                Proctor, M.T., Stevens. M., Nagy, S., Lord, B., & O’Riordan, E.
                                (2009). Giving ‘voice’ to families’ experiences of living with a
                                paediatric life-limiting conditions: An Australian story. QHR
                                2008 Conference Abstracts. International Journal of Qualitative
                                Methods, 8 (3), 6.
              </p>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2009</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Miner, M., Proctor, M-T., & Dowson, M. (Eds) (2009). Spirituality
                            in Australia, Volume 2: Directions and Applications, ACSS/CHILD:
                            Sydney.
            </Table.Cell>
                    </Table.Row>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2008</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T., & McLean, L. (2008). Assessing Attachment to God
                                And Spirituality As An Aspect Of Psychological Health And
                                Wellbeing. Australian and New Zealand Journal of Psychiatry, 42
                                (Suppl. 1): A34.
              </p>
                            <p>
                                Proctor, M-T., Miner, M., & Dowson, M. (2008). Attachment To
                                God, Spiritual Maturity And Psychological Health. Australian and
                                New Zealand Journal of Psychiatry, 42(Suppl. 1): A34
              </p>
                            <p>
                                Proctor, M-T., Nagy, S., Stevens, M., Lord, B., & O’Riordan, L.
                                (2008). Out Of The Mouth Of Babes: Australian Children And
                                Adolescents Speak Of Living And Dying With A Life Limiting
                                Condition. Australian and New Zealand Journal of Psychiatry, 42
                                (Suppl. 1): A104.
              </p>
                            <p>
                                Proctor, M-T., Nagy, S., Stevens, M., Lord, B., & O’Riordan, L.
                                (2008). In Need of Support: Recognizing The Care Roles And
                                Contribution Of Extended Family Members In Families Caring For
                                Children With Life Limiting Conditions. Australian and New
                                Zealand Journal of Psychiatry, 42 (Suppl. 1): A106.
              </p>
                            <p>
                                McLean, L., & Proctor, M-T. (2008). Attachment To God In
                                Sickness And In Health: Theoretical Considerations And Clinical
                                Applications Of Understanding This Important Relationship In The
                                Lives Of Our Patients/Clients As An Attachment Relationship,
                                Australian and New Zealand Journal of Psychiatry, 42 (Suppl. 1)
                                A32-A34.
              </p>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

    const invitedLecturesAndPresentations = () => {
        return (
            <Table>
                <Table.Header>
                    <Table.Row verticalAlign='top'>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Publication Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2018</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. (2018). Invited Key-Note speaker (3 sessions),
                            BaptistCare Chaplaincy Conference, October 10, 2018, Sydney.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2018</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor M-T. (2018). Invited speaker, Human and Spiritual
                            Attachment PD workshops. Soul Care Australia, Canberra Branch,
                            April 21, 2018.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2017</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. (2017). Invited Key-Note speaker (3 papers - Human
                            Attachment, Spiritual Attachment, Implications for Chaplaincy
                            Practice), Australian Chaplaincy Conference, September 7th, 2017,
                            South Wollongong, NSW
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2016</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. (2016). The value of story: Connecting with others'
                            lived experiences. Keynote address at the opening of the Lumen
                            Research Institute, Excelsia College, on 9 March 2016.
            </Table.Cell>
                    </Table.Row>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2010</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T (2010) Thinking about attachment to God:
                                Implication for therapy, Invited speaker, APS Christianity and
                                Psychology Interest Group December 2010 Symposium (Invited
                                Speaker), December 4, 2010, Sydney.
              </p>

                            <p>
                                Proctor, M-T (2010) Spirituality in healthcare: Rising to the
                                challenge. Invited speaker, Academic Seminar for Nepean Hospital
                                Psychiatry and Allied Health Staff (Invited speaker), July 13,
                Nepean Hospital: Sydney.{" "}
                            </p>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2008</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Ghobary Bonab, M. & Proctor M-T (2008). Associate Professor Bagher
                            Ghobary (University of Tehran, Iran) - An Interview with Dr
                            Marie-Thérèse Proctor discussing ‘Reliance on God as a Core Virtue
                            in Spirituality and a Cardinal Construct in Psychological
                            Wellbeing’. A keynote presentation: Spirituality, Human
                            Development and Well-Being UWS Psychology and Spirituality Society
                            2008 Conference, July 24, Sydney.
            </Table.Cell>
                    </Table.Row>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2007</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Nagy, S., & Proctor, M-T (2007). Using computer assisted
                            qualitative data analysis software: From simple to complex.
                            Research workshop (by invitation) presented at the University of
                            Technology, Faculty of Nursing, Midwifery and Health - Faculty
                            Research Week December 2007 Program, December 5, 2007.
            </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

    const conferencePresentations = () => {
        return (
            <Table>
                <Table.Header>
                    <Table.Row verticalAlign='top'>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Publication Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2019</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. (2019). Childhood trauma and Christian spirituality
                            in adulthood (Panel: Childhood Trauma and its impact on spiritual
                            well-being). Australian & New Zealand Association of Psychotherapy
                            (ANZAP) 30th Annual Conference: Society and Spirit in the
                            Therapeutic Space, October 19-20, 2019, Sydney.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2016</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. (2016). Exploration of Australian Christians'
                            experiences of God as safe haven: A qualitative study.
                            Peer-reviewed paper presented at the Spirituality, Culture and
                            Well-Being Conference of the Lumen Research Institute and Excelsia
                            College, Sydney, Australia, on 5 October, 2016.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2014</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T. (2014). Chronic complex trauma and problematic
                                relational Christian spirituality: A Conversational Model
                                perspective, International Trauma Conference - Childhood Trauma:
                                Understanding the basis of change and recovery, Melbourne August
                                4-8.
              </p>
                            <p>
                                Law, J., McLean, L., Kwiet, J., Rogers, V., Shaw, J., Proctor,
                                M-T., Streimer, J., Elfleet, D., Darton, A.E., & Vandervord, J.
                                (2014). Is attachment style associated with psychological
                                symptoms in early adjustment to severe burn injury in adults?
                                Peer-reviewed paper presented at the the 17th Congress of the
                                International Society for Burn Injuries (ISBI), Sydney, October
                12-16, 2014.{" "}
                            </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2012</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                McLean L, Proctor M-T, Kowloska K. (2012). Changing minds,
                                changing bodies: Attachment research as a model for integrated
                                care and psychotherapy. RANZCP Section of Psychotherapy
                                Conference, ‘Speaking in different Tongues’, Prato, Italy, Oct
                                1-3, 2012.
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2011</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T. (2011). A delicate balance’: The intersection of
                                the spiritual and psychological in healthcare. Peer-reviewed
                                paper presented at the Spirituality in the 21st Century: At the
                                Interface of Theory, Praxis and Pedagogy, 1st Global Conference:
                                Sunday 20th March – Tuesday 22nd March 2011, Prague, Czech
                                Republic.
              </p>
                            <p>
                                Proctor, M-T., McLean, L., Miner-Bridges, M., Dowson, M. &
                                Devenish, S. (2011). Exploring the psycho-spiritual ‘attachment
                                to God’: The contribution of Australian researchers.
                                Peer-reviewed paper presented at the Spirituality in the 21st
                                Century: At the Interface of Theory, Praxis and Pedagogy, 1st
                                Global Conference: Sunday 20th March – Tuesday 22nd March 2011,
                                Prague, Czech Republic.
              </p>
                            <p>
                                McLean, L., & Proctor. M.T (2011). Attachment to God and the
                                relationship with development and dynamic psychotherapy: Complex
                                companions on the pilgrim road to human flourishing. World
                                Congress Psychotherapy, Sydney Australia, Aug 24-28, 2011.
              </p>
                            <p>
                                McLean, L., Proctor, M-T., Kwiet, J., Streimer, J., Vandervord,
                                J., Shaw, J., & Kowlowska, K. (2011). Secure attachment to God
                                and a secure/ comfortable attachment organization may both
                                promote healthy recovery from severe burns injury. Peer-reviewed
                                paper presented at the Spirituality in the 21st Century: At the
                                Interface of Theory, Praxis and Pedagogy 1st Global Conference,
                Prague, Czech Republic, March 2011.{" "}
                            </p>
                            <p>
                                Miner, M., Dowson, M. & Proctor, M.T. (2011). Psychological
                                linkages between spirituality and health. Invited paper in
                                Catholic Health Australian Spirituality and Health Conference,
                                Panel session 3: Renewing the link between spirituality and
                                health, Chair: Sr Helen Monkivitch, Director Leadership &
                                Mission, Mercy Health. Canberra, Australia, on 1st September.
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2009</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T. (2009). Negotiating a child’s death within a
                                spiritual paradigm: A family’s journey of loss and bereavement.
                                Peer-reviewed paper presented at the ‘Together! Cultural
                                connections for quality care at the end of life - Palliative
                                Care 2009 Conference (Combining the 10th APCC & the 8th APHC),
                                24-27 September, Perth, W.A.
              </p>
                            <p>
                                Proctor, M-T., Stevens, M., Nagy, S., Lord, B., & O’Riordan, E.
                                (2009). “In sickness, until death do us part”: Points of
                                transition in the journey of caring for a child or adolescent
                                diagnosed with a life-limiting condition. Peer-reviewed paper
                                presented at the Health in Transition 2009 – Researching for the
                                future: 4th International Conference on Community Health Nursing
                                Research, 16-20 August, Adelaide S.A.
              </p>
                            <p>
                                Miner, M., Ghobary-Bonah, B., Dowson, M., & Proctor, M-T.
                                (2009). Attachment to God in Christian and Muslim communities:
                                Foundational for human flourishing? Peer reviewed paper
                                presented at the Cosmos, Nature, and Culture: A
                                Transdisciplinary Conference (A program of the Metanexus
                                Institute (www.metanexus.net)), July 18-21, 2009, Phoenix, AZ,
                                USA.
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2008</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T. (2008). ‘On the outside looking in’: Reflections
                                on working with vulnerable populations and with challenging
                                topics. Peer-reviewed paper presented at the 9th Advances in
                Qualitative Methods Conference, October 8-11, Banff, Canada.{" "}
                            </p>
                            <p>
                                Proctor, M-T. (2008). Conversations about God: Spirituality and
                                qualitative research approaches not so strange bedfellows;
                                Peer-reviewed paper presented at the 9th Advances in Qualitative
                                Methods Conference, October 8-11, Banff, Canada.
              </p>
                            <p>
                                Proctor, M-T., & McLean, L. (2008). Attachment to God and
                                psychological health: Considering assessment of attachment to
                                God in research, clinical care and psychotherapy (part of a
                                three paper symposium). Peer-reviewed paper presented at the
                                43rd Australian Psychological Society (APS) Conference, 23-27
                                September, Tasmania.
              </p>
                            <p>
                                Proctor, M.T., & McLean, L. (2008). Considering assessment of
                                attachment to God and spirituality as an aspect of psychological
                                health and wellbeing; Peer-reviewed paper presented at the
                                Spirituality, Human Development and Well-Being UWS Psychology
                                and Spirituality Society 2008 Conference, July 24-25, Sydney.
              </p>
                            <p>
                                Proctor, M-T., & McLean, L. (2008). Assessing attachment to God
                                and spirituality as an aspect of psychological health and
                                wellbeing. Peer reviewed paper presented at the Royal Australian
                                & New Zealand College of Psychiatry (RANZCP) 2008 Congress,
                                25-29 May, Melbourne.
              </p>
                            <p>
                                Proctor, MT., Miner, M., & Dowson, M. (2008). Attachment to God,
                                spiritual maturity and psychological health. Peer-reviewed paper
                                presented at the Spirituality, Human Development and Well-Being
                                UWS Psychology and Spirituality Society 2008 Conference, July
                                24-25, Sydney.
              </p>
                            <p>
                                Proctor, M-T., Miner, M., & Dowson, M. (2008). Attachment to
                                God, spiritual maturity and psychological health; Peer-reviewed
                                paper presented at the Royal Australian & New Zealand College of
                                Psychiatry (RANZCP) 2008 Congress, 25-29 May, Melbourne.
              </p>
                            <p>
                                Proctor, M-T., Nagy, S., Stevens, M., Lord, B., & O’Riordan, E.
                                (2008). Out of the mouth of babes: Australian children and
                                adolescents speak of living and dying with a life limiting
                                condition. Peer-reviewed paper presented at the Royal Australian
                                & New Zealand College of Psychiatry (RANZCP) 2008 Congress, May
                25-29, Melbourne.{" "}
                            </p>
                            <p>
                                Proctor, M-T., Nagy, S., Stevens, M., Lord, B., & O’Riordan, E.
                                (2008). In need of support: Recognising the care roles and
                                contribution of extended family members in families caring for
                                children with life limiting conditions. Peer-reviewed paper
                                presented at the Royal Australian & New Zealand College of
                Psychiatry (RANZCP) 2008 Congress, May 25-29, Melbourne.{" "}
                            </p>
                            <p>
                                Proctor, M-T., Stevens, M., Nagy, S., Lord, B., & O’Riordan, E.
                                (2008). My sister or brother is going to die: Well siblings’
                                experiences of living in a family caring for a child or
                                adolescent with a life-limiting condition; Peer-reviewed paper
                                presented at the 14th Qualitative Health Research Conference,
                                October 3-6, Banff, Canada,
              </p>
                            <p>
                                Proctor, M-T., Stevens, M., Nagy, S., Lord, B., & O’Riordan, E.
                                (2008). Giving ‘voice’ to families’ experiences of living with a
                                paediatric life-limiting condition: An Australian story.
                                Peer-reviewed paper presented at the 14th Qualitative Health
                Research Conference, October 3-6, Banff, Canada.{" "}
                            </p>
                            <p>
                                Proctor, M-T., Stevens, M., Nagy, S., Lord, B., & O’Riordan, E.
                                (2008). Shadowed by illness: Qualitative psycho-social research
                                helping to identify the needs and experiences of well siblings
                                living in Australian families caring for children with life
                                limiting conditions. Peer-reviewed paper presented at the 43rd
                                Australian Psychological Society (APS) Conference, 23-27
                                September, Tasmania.
              </p>
                            <p>
                                Proctor, M-T., Stevens, M., Nagy, S., Lord, B., & O’Riordan, E.
                                (2008). Spirituality and bereavement: Coping with the death of a
                                child with a life limiting condition within a spiritual
                                framework; Peer-reviewed paper presented at the Spirituality,
                                Human Development and Well-Being UWS Psychology and Spirituality
                                Society 2008 Conference, July 24-25, Sydney.
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2007</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T., Lord, B., Stevens, M., Nagy, S., & O’Riordan, E.
                                (2007). Waiting to be heard: Perspectives and experiences of
                                fathers from families caring for children with life-limiting
                                condition. Paper presented at the 2007 Social Work Seminar:
                                Bringing research to social work practice, The Children’s
                                Hospital at Westmead, November, 2007.
              </p>
                            <p>
                                Stevens, M., Proctor, M-T., Nagy, S., Lord, B., & O’Riordan, E.
                                (2007). Families caring for children with a life-limiting
                                condition: Researching vulnerable paediatric populations’. Paper
                                presented at the 2007 Palliative Care Symposium, The Children’s
                                Hospital at Westmead, Sydney, March, 2007.
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2006</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, M-T., Nagy, S., Stevens, M., Lord, B., & O’Riordan, E.
                                (2006). ‘I’m living and I’m dying’: Giving a ‘voice’ to
                                adolescents living with life limiting conditions. Peer-reviewed
                                paper presented at the 5th Australian and New Zealand Adolescent
                                Health Conference (Youth Health 2006: The Young People’s Health
                                – What’s it going to take?), 13-15 November, Sydney, Australia.
              </p>
                            <p>
                                Proctor, M-T., Nagy, S., Stevens, M., Lord, B., & O’Riordan, E.
                                (2006). Families as ‘carers’ of children with life limiting
                                conditions: Diversity in roles and needs. Peer-reviewed paper at
                                presented at the 9th Biennial International Conference for
                                Paediatric and Child Health Nurses; Convened by The Australian
                                Confederation of Paediatric and Child Health Nurses, 17-19 May,
                                Melbourne, Australia.
              </p>
                            <p>
                                Proctor, M-T., Stevens, M., Nagy, S., Lord, B., & O’Riordan, E.
                                (2006). Working as a qualitative research team: Facing the
                                challenges presented in exploring Australian families’
                                experiences caring for children with life limiting conditions.
                                Peer-reviewed paper presented at the 7th International
                                Interdisciplinary Conference: Advances in Qualitative Methods
                                ‘Looking to the Future: Opportunities & Challenges for
                                Qualitative Research’; Convened by the International Institute
                                for Qualitative Methodology, 13-15 July, Surfers Paradise,
                                Australia.
              </p>
                            <p>
                                Lord, B., Proctor, M-T., Stevens, M., Nagy, S., & O’Riordan, E.
                                (2006). Breaking their silence: Identifying and addressing the
                                needs of fathers caring for children with life limiting
                                conditions. Peer-reviewed paper presented at the 5th
                                International Conference on Social Work in Health and Mental
                                Health, 10-14 December, Hong Kong, China.
              </p>
                            <p>
                                Stevens, M., Proctor, M-T., Nagy, S., Lord, B., & O’Riordan, E.
                                (2006). Families caring for a child with a life-limiting
                                condition: Making the transition into the adult healthcare
                                system. Paper presented at the 2006 Australia and New Zealand
                                Society of Palliative Medicine Conference, 4-6 October,
                Newcastle, Australia.{" "}
                            </p>
                            <p>
                                Stevens, M., Proctor, M-T., Nagy, S., Lord, B., & O’Riordan, E.
                                (2006) Families caring for a child with a life-limiting
                                condition: Exploring the experiences of parents - Mothers’
                                accounts of their experiences with health care professionals;
                                Paper presented at the 2006 Palliative Care Symposium, The
                Children’s Hospital at Westmead, March 3, Sydney.{" "}
                            </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2005</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Lord, B., Proctor, M-T., Stevens, M., Nagy, S., & O’Riordan, E.
                            (2005) Families caring for a child with a life limiting condition:
                            A journey of discovery. Paper presented at the 2005 Paediatric
                            Research Seminar: ‘All About Children’, Convened by the Nursing &
                            Allied Health Research Committee, The Children’s Hospital at
                            Westmead, July 22, Sydney.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2004</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Nagy, S., Kearney, P., & Proctor. M-T. (2004) Kids with Chronic
                            Fatigue Syndrome/ Myalgic Encephalitis and their families: The
                            need to reduce health care inequities. Peer-reviewed paper
                            presented at the 8th Biennial International Paediatric and Child
              Health Nurses’ Conference. September, Adelaide, S.A.{" "}
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>1999</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, M-T. (1999). Attachment to God: Is it a viable concept?
                            Paper [2] presented at the 1st International Philosophy, Science,
                            and Theology Festival, Symposium Title: ‘The Plight of Humans in a
                            Chaotic World, June 1999, Grafton, NSW.
            </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

    const symposiumConvener = () => {
        return (
            <Table>
                <Table.Header>
                    <Table.Row verticalAlign='top'>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Publication Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2008</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                Proctor, MT. (2008). Symposium title: The spiritual dimension in
                                clinical, therapeutic and pastoral settings (consisting of six
                                papers): Spirituality, human development and well-being, UWS
                                Psychology and Spirituality Society 2008 Conference, July 24-25,
                                Sydney.
              </p>
                            <p>
                                Proctor, MT. (2008). Symposium title: Attachment to God
                                (consisting of four papers): Spirituality, human development and
                                well-being, UWS Psychology and Spirituality Society 2008
                Conference, July 24-25, Sydney.{" "}
                            </p>
                            <p>
                                McLean, L., & Proctor, M.T. (2008). Symposium title: Attachment
                                to God in sickness and in health: theoretical considerations and
                                clinical applications of understanding this important
                                relationship in the lives of our patients/clients as an
                                attachment relationship (consisting of five papers). Royal
                                Australian & New Zealand College of Psychiatry (RANZCP) 2008
                Congress, May 25-29, Melbourne.{" "}
                            </p>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

    const conferencePosters = () => {
        return (
            <Table>
                <Table.Header>
                    <Table.Row verticalAlign='top'>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>Publication Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2011</Label>
                        </Table.Cell>
                        <Table.Cell>
                            <p>
                                McLean. L., Kwiet, J., Rogers, V., Streimer, J., Vandervord, J.,
                                Shaw, J., & Proctor M-T. (2011). Adjustment to burns and
                                contributions from attachment: early interview data and
                                correlates with coping style. ANZBA Conference, Brisbane, Oct
                                4-7, 2011.
              </p>
                            <p>
                                McLean, L., Proctor, M-T., & Kowloska, K. (2011). Changing
                                minds, changing bodies: Attachment as a model for
                                biopsychosocial medicine. Hospital Week, Westmead Hospital, Sept
                                13-16, 2011.
              </p>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2010</Label>
                        </Table.Cell>
                        <Table.Cell>
                            McLean, L., Maddison, V., Tennant, C., Kopel, M-C., Chen, Q.,
                            Ward, C., Proctor, M-T., & Tofler, G. (2010). How do we heal the
                            sick at heart?: A review of psychotherapy for stress dysregulation
                            and depression to decrease cardiovascular risk. Second
                            International Conference on Psychogenic Heart Disease, Prato
                            Italy, Sept 1-4, 2010.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2009</Label>
                        </Table.Cell>
                        <Table.Cell>
                            McLean, L., Shaw, J., Streimer, J., Vandervord, J., Levy, Y., &
                            Proctor M-T. (2009). Psychosocial factors influencing adjustment
                            to severe burns injury: A literature review and a proposal. ANZBA
                            Conference, Wellington New Zealand, Sept 22-25, 2009.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2008</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Stevens,M., Proctor, M-T., Nagy, S., Lord, B., & O'Riordan, E.
                            (2008). Exploring the experiences of Australian families caring
                            for children and adolescents with life-limiting conditions: The
                            Life-Limiting Conditions Project. International Work Group on
                            Death, Dying and Bereavement Conference, September 2008.
            </Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign='top'>
                        <Table.Cell>
                            <Label ribbon>2002</Label>
                        </Table.Cell>
                        <Table.Cell>
                            Proctor, MT. (2002). Exploring attachment to God: The validation
                            of the God Attachment Style Questionnaire (GASQ) and the
                            development of the God Attachment Interview Schedule (GAIS).
                            Poster presented at the Spirituality & Psychological Health:
                            Issues of Form & Content Conference, University of Western Sydney,
                            July 2002.
            </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    };

    const panes = [
        { menuItem: "Articles", render: () => articles() },
        { menuItem: "Book Chapters", render: () => bookChapters() },
        { menuItem: "Edited Monograph", render: () => editedMonograph() },
        // {
        //     menuItem: "Published Peer-Reviewed Abstracts",
        //     render: () => publicPeerReviewAbstracts()
        // },
        {
            menuItem: "Symposium",
            render: () => symposiumConvener()
        },
        {
            menuItem: "Invited Lectures and Presentations",
            render: () => invitedLecturesAndPresentations()
        },
        {
            menuItem: "Conference Presentations",
            render: () => conferencePresentations()
        },
        {
            menuItem: "Conference Posters",
            render: () => conferencePosters()
        }
    ];

    return (
        <Layout>
            <Jumbotron
                src={purpleFlower}
            ></Jumbotron>
            <Divider hidden />
            <Container >
                <Header as={'h1'} textAlign="center">Research</Header>
                <p>
                    Engaging in research is an important aspect of academic life. Below
                    are listed publications and presentations arising from this work (both
                    sole research and research in collaboration with others), some of
                    which has focused on spirituality and psychological health; the
                    experiences of those with disability and serious illness and their
                    carers’ needs; sense-making in the context of trauma and loss; and
                    health practitioner professional formation. I continue to research via
                    a range of research collaborations, including as Senior Research
                    Fellow with the Lumen Research Institute (2017-2020).
        </p>

                
                <ResponsiveTabs panes={panes}/>


            </Container>
        </Layout>
    );
}
