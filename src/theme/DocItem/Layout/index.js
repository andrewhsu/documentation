import React, { useState } from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import styles from "./styles.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Icon from "@material-ui/core/Icon";
import ContributionIcon from "../../../../static/img/contribution.svg";
import { useLocation } from 'react-router-dom';


const MyModal = (props) => {
  const [other, setOther] = useState(false);
  const [feedbackSubmited, setfeedbackSubmited] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  let title,whatWeDo,easyRadio, solvedRadio,otherRadio;
  
  if (!props.show) {
    return null;
  }
  
  otherRadio = "Other";

  if(props.positiveFeedback){
    title = "What do you like about this doc?";
    easyRadio = "Easy to understand";
    solvedRadio = "Solved my problem";
    whatWeDo = "Let us know what we do well:";
  }
  else{
    title = "What did you not like about this doc?";
    easyRadio = "Hard to understand";
    solvedRadio = "Did not solve my problem";
    whatWeDo = "Let us know what we can improve:";
    
  }

  return (
    <form data-netlify="true" netlify name="submissionForm" >
      <div className={styles.modal} onClick={props.onClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {!feedbackSubmited ? (
          <div>
              
                <div className={styles.modalHeader}>
                  <h4>{title}</h4>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.radioButtons}>
                      <label>
                        <input type="radio" name="feedbackOptions" id="easyToUnderstand" value="understand" onChange={() => {setOther(false); setDisableButton(true);}} />
                        <span className={styles.labelMargin} >{easyRadio}</span>
                      </label> <br />
                      <label>
                        <input type="radio" name="feedbackOptions" id="solvedProblem" value="solved"onChange={() => {setOther(false); setDisableButton(true);}}/>
                        <span className={styles.labelMargin}>{solvedRadio}</span>
                      </label><br />
                      <label>
                        <input type="radio" name="feedbackOptions" id="other" value="other" onChange={() => {setOther(true); setDisableButton(true);}} />
                        <span className={styles.labelMargin}>{otherRadio}</span>
                      </label><br/>
                    </div>
                    <div className={styles.boxSizing}>
                      If we can contact you with more questions, please enter your
                      email address:
                    </div>
                    <input type="text" name="email" id="email" placeholder="email@example.com" className={styles.moreQuestions}/><br />
                    {other && (
                      <div>
                        <div className={styles.boxSizing + " " + styles.padding}>
                          {whatWeDo}
                        </div>
                        <textarea id="otherText"  name="otherText"  rows="4"  cols="50"  placeholder="Please describe in more details your feedback."></textarea>
                      </div>
                    )}
                </div>
                <div className={styles.modalFooter}>
                  {!feedbackSubmited &&
                  <button type= "submit" onSubmit={() => {setfeedbackSubmited(true); setTimeout(props.onClose,30000)}} className={clsx("button", styles.submitButton)} disabled={!disableButton}>Submit</button>
                }
                  <button type ="button" onClick={props.onClose}  className={clsx("button", styles.closeButton)}>Close</button>
                </div>
              
            </div>): 
            
            (<div className={styles.modalBody}>
              <div className={styles.feedbackSubmited}>
              <Icon className={styles.feedbackSubmitedIcon}>checkmark</Icon><br/>
              Thank you for submitting your feedback.
              <button onClick={props.onClose}  className={clsx("button", styles.closeButton)}>Close</button>
              </div>
              
              

            </div>)}
            
          </div>
          
      </div>
      </form>
  );
};

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  const { editUrl } = metadata;
  const [show, setShow] = useState(false);
  const [positiveFeedback, setPositiveFeedback] = useState(true);
  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            {console.log(useLocation())}
            {!(
              useLocation().pathname.includes("/docs/platform/deployment/cloud")
              ) 
            && <DocVersionBadge />}
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          {/* BEGIN COMPONENT SWIZZLING. Add link to repository.
           */}
          <section className={styles.issueLinkSeparator}>
            <BrowserOnly>
              {() => (
                <div className="row">
                  <div>
                    
                  </div>
                  <div className={clsx("col", styles.feedBackSection + " " + styles.mailIcon)}>
                    <div>Was this page helpful?</div>

                    <div>
                      <button
                        className={
                          styles.mailIcon + " " + styles.thumbsUpSeparator
                        }
                        onClick={() => {setShow(true); setPositiveFeedback(true);}}
                      >
                        <Icon>thumb_up</Icon>
                      </button>

                      <button
                        className={
                          styles.mailIcon + " " + styles.thumbsUpSeparator
                        }
                        onClick={() => {setShow(true); setPositiveFeedback(false);}}
                      >
                        <Icon>thumb_down</Icon>
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <a href="https://redpanda.com/slack" alt="Slack Community"><Icon className={styles.mailIcon}>group</Icon> Ask in the community</a>
                  </div>
                  <div className="col">
                    <a
                      href={
                        "mailto:rp-docs-feedback@redpanda.com?subject=Documentation Feedback&body=Doc url: " +
                        window.location.href
                      }
                    >
                      <Icon className={styles.mailIcon}>email</Icon>
                      <span> Share your feedback</span>
                    </a>
                  </div>
                  <div className={clsx("col", styles.reportIssueText)}>
                    <a
                      href={editUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={styles.contributionIcon}
                    >
                      <ContributionIcon />
                      <span> Make a contribution</span>
                    </a>
                  </div>
                  <MyModal onClose={() => setShow(false)} show={show} positiveFeedback={positiveFeedback} className={styles.mymodal}></MyModal>
                </div>
              )}
            </BrowserOnly>
          </section>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
