var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=null;function r(e){let t=e.replace(/^#\/?/,``);if(t===``||t===`/`)return{view:`home`};if(t===`settings`)return{view:`settings`};if(t===`demo/datetime`)return{view:`demo-datetime`};if(t===`demo/datetime-range`)return{view:`demo-datetime-range`};if(t===`demo/mood`)return{view:`demo-mood`};if(t===`demo/mood-record`)return{view:`demo-mood-record`};if(t===`demo/sleep-mood`)return{view:`demo-sleep-mood`};let n=t.match(/^new\/(.+)$/);if(n)return{view:`new`,formId:n[1]};let r=t.match(/^edit\/(.+?)\/(\d{4}-\d{2}-\d{2})(?:\/(\d+))?$/);if(r){let e=r[3]?parseInt(r[3],10):1;return{view:`edit`,formId:r[1],date:r[2],index:e}}let i=t.match(/^view\/(.+?)\/(\d{4}-\d{2}-\d{2})(?:\/(\d+))?$/);if(i){let e=i[3]?parseInt(i[3],10):1;return{view:`readonly`,formId:i[1],date:i[2],index:e}}return{view:`home`}}function i(e){window.location.hash=e}function a(e){n=e,window.addEventListener(`hashchange`,()=>{n&&n(r(window.location.hash))}),e(r(window.location.hash))}function o(e){switch(e.view){case`home`:return`#/`;case`settings`:return`#/settings`;case`new`:return`#/new/${e.formId}`;case`edit`:{let t=e.index??1;return t>=2?`#/edit/${e.formId}/${e.date}/${t}`:`#/edit/${e.formId}/${e.date}`}case`readonly`:{let t=e.index??1;return t>=2?`#/view/${e.formId}/${e.date}/${t}`:`#/view/${e.formId}/${e.date}`}case`demo-datetime`:return`#/demo/datetime`;case`demo-datetime-range`:return`#/demo/datetime-range`;case`demo-mood`:return`#/demo/mood`;case`demo-mood-record`:return`#/demo/mood-record`;case`demo-sleep-mood`:return`#/demo/sleep-mood`}}var s=`input_`,c=`freedbt_settings`,l=`freedbt_google_token`,u=`freedbt`,d=`fills`,f=`fsa_handle`,p=`custom`,m=`freedbt_custom.json`,h=[`mon`,`tue`,`wed`,`thu`,`fri`,`sat`,`sun`],g={mon:`Monday`,tue:`Tuesday`,wed:`Wednesday`,thu:`Thursday`,fri:`Friday`,sat:`Saturday`,sun:`Sunday`},_={mon:`M`,tue:`T`,wed:`W`,thu:`Th`,fri:`F`,sat:`S`,sun:`Su`},v=`1008660441251-bqhj6olmvkpcpftm362o8c02sts6c36m.apps.googleusercontent.com`,y=`https://www.googleapis.com/drive/v3`,b=`https://www.googleapis.com/upload/drive/v3`,x=`https://www.googleapis.com/auth/drive.appdata`,S=`_deletions.json`,C=`freedbt_mood_records.json`,ee=`mood_records`,w=`freedbt_synced_settings.json`,te=`synced_settings`,ne=`sleep_records.json`,re=`sleep_records`,ie=`freedbt_notes.json`,ae=`notes`,oe=`_freedbt_vault_v1.json`,se=`sync_content_key_v1`,ce=`sync_vault_fingerprint_v1`,le=`sync_vault_salt_v1`,ue=2e5;function T(e,t=1,n=``){return`<textarea id="${s}${e}" name="${e}" rows="${t}"${n?` placeholder="${n}"`:``} class="form-textarea form-textarea-auto"></textarea>`}function E(e,t=``,n=!1){return n?`<input type="text" id="${s}${e}" name="${e}" placeholder="${t}" class="form-input form-input-auto" style="min-width:${Math.max(t.length,3)}ch">`:`<input type="text" id="${s}${e}" name="${e}" placeholder="${t}" class="form-input">`}function D(e){return`<input type="date" id="${s}${e}" name="${e}" class="form-input">`}function O(e,t,n){return`<input type="number" id="${s}${e}" name="${e}" min="${t}" max="${n}" class="form-input form-input-number">`}function k(e){return`<input type="checkbox" id="${s}${e}" name="${e}" class="form-checkbox">`}function de(e,t,n=`inline-radio-group`,r=`${n}-item`,i){let a=i?`<span class="${i}">`:`<span>`;return`<div class="${n}">${`
    <label class="${r}">
      ${a}·</span>
      <input type="radio" id="${s}${e}_none" name="${e}" value="">
    </label>`}${t.map(t=>`
    <label class="${r}">
      ${a}${t.label}</span>
      <input type="radio" id="${s}${e}_${t.value}" name="${e}" value="${t.value}">
    </label>`).join(``)}</div>`}function fe(e){return`<div class="day-radio-group">${h.map(t=>`
    <label class="day-radio">
      <span class="day-radio-label">${_[t]}</span>
      <input type="checkbox" id="${s}${e}_${t}" name="${e}_${t}" class="form-checkbox">
    </label>`).join(``)}</div>`}function A(e,{label:t=``,minRows:n=1,placeholder:r=``,seplabel:i=!1}={}){return`<div class="labeled-expanding-free-input${i?` labeled-expanding-free-input--seplabel`:``}">
    <label for="${s}${e}">${t}</label>
    ${T(e,n,r)}
  </div>`}function pe(e,t,n,r={}){let i=`
    <label class="scale-radio-item">
      <span class="scale-radio-number">·</span>
      <input type="radio" id="${s}${e}_none" name="${e}" value="">
    </label>`,a=[];for(let i=t;i<=n;i++){let t=r[i]?`<span class="scale-radio-anchor">${r[i]}</span>`:``;a.push(`
    <label class="scale-radio-item">
      ${t}
      <span class="scale-radio-number">${i}</span>
      <input type="radio" id="${s}${e}_${i}" name="${e}" value="${i}">
    </label>`)}return`<div class="scale-radio-group">${i}${a.join(``)}</div>`}function me(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 5</h2>
      <p class="worksheet-ref">(Emotion Regulation Handouts 8, 8a) (p. 1 of 2)</p>
      <h3 class="worksheet-name">Check the Facts</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      It is hard to problem-solve an emotional situation if you don't have your facts straight.
      You must know what the problem is before you can solve it. This worksheet helps you figure
      out whether it is the event that is causing your emotion, your interpretation of the event,
      or both. Use your mindfulness skills of observing and describing. Observe the facts, and
      then describe the facts you have observed.
    </p>

    <fieldset class="worksheet-step">
      <legend>Step 1</legend>
      <p><strong>Ask: What emotion do I want to change?</strong></p>
      <div class="form-row">
        <label>EMOTION NAME: ${E(`emotion_name`)}</label>
      </div>
      <div class="form-row">
        <label>INTENSITY (0–100) Before: ${O(`intensity_before`,0,100)}</label>
        <label>After: ${O(`intensity_after`,0,100)}</label>
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 2</legend>
      <p><strong>Ask: What is the PROMPTING EVENT for my emotional reaction?</strong></p>
      <p>DESCRIBE THE PROMPTING EVENT: What happened that led you to have this emotion?
         Who did what to whom? What led up to what? What is it about this event that is
         a problem for you? Be very specific in your answers.</p>
      ${A(`step2_prompting_event`)}

      <div class="check-the-facts">
        <h4>CHECK THE FACTS!</h4>
        <p>Look for extremes and judgments in the way you are describing the prompting event.</p>
        <p><strong>REWRITE</strong> the facts, if necessary, to be more accurate.</p>
        ${A(`step2_rewrite`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 3</legend>
      <p><strong>Ask: What are my INTERPRETATIONS (thoughts, beliefs, etc.) about the facts?</strong></p>
      <p>What am I assuming? Am I adding my own interpretations to the description of the prompting event?</p>
      ${A(`step3_interpretations`)}

      <div class="check-the-facts">
        <h4>CHECK THE FACTS!</h4>
        <p>List as many <em>other</em> possible interpretations of the facts as you can.</p>
        ${A(`step3_other_interpretations`)}
        <p><strong>REWRITE</strong> the facts, if necessary. Try to check the accuracy of your interpretations.
           If you can't check the facts, write out a likely or a useful (i.e., effective) interpretation.</p>
        ${A(`step3_rewrite`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 4</legend>
      <p><strong>Ask: Am I assuming a THREAT?</strong> What is the THREAT? What about this event or
         situation is threatening to me? What worrisome consequences or outcomes am I expecting?</p>
      ${A(`step4_threat`)}

      <div class="check-the-facts">
        <h4>CHECK THE FACTS!</h4>
        <p>List as many <em>other</em> possible outcomes as you can, given the facts.</p>
        ${A(`step4_other_outcomes`)}
        <p><strong>REWRITE</strong> the facts if needed. Try to check the accuracy of your expectations.
           If you can't check out probable outcomes, write out a likely noncatastrophic outcome to expect.</p>
        ${A(`step4_rewrite`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 5</legend>
      <p><strong>Ask: What's the CATASTROPHE, even if the outcome I am worrying about does occur?</strong>
         Describe in detail the worst outcome I can reasonably expect.</p>
      ${A(`step5_catastrophe`)}

      <p><strong>DESCRIBE WAYS TO COPE</strong> if the worst does happen.</p>
      ${A(`step5_ways_to_cope`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 6</legend>
      <p><strong>ASK: Does my emotion (or its intensity or duration) FIT THE FACTS?</strong></p>
      <div class="form-row">
        <label>(0 = not at all to 5 = I am certain): ${O(`step6_fit_rating`,0,5)}</label>
      </div>
      <p>If you are unsure whether your emotion or your emotional intensity fits the facts
         (for example, you give a score of 2, 3, or 4), keep checking the facts. Be as creative
         as you can be; ask others for their opinions; or do an experiment to see if your
         predictions or interpretations are correct.</p>
      <p><strong>Describe what you did to check the facts:</strong></p>
      ${A(`step6_what_i_did`)}
    </fieldset>
  `}function he(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 7</h2>
      <p class="worksheet-ref">(Emotion Regulation Handouts 10, 11)</p>
      <h3 class="worksheet-name">Opposite Action to Change Emotions</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Select a current or recent emotional reaction that you find painful or want to change.
      Figure out if the emotion fits the facts. If it does not, then notice your action urges;
      figure out what would be opposite actions; and then do the opposite actions <em>all the way</em>.
      Remember to practice opposite action <em>all the way</em>. Describe what happened.
    </p>

    <div class="form-row">
      <label>EMOTION NAME: ${E(`emotion_name`)}</label>
    </div>
    <div class="form-row">
      <label>INTENSITY (0–100) Before: ${O(`intensity_before`,0,100)}</label>
      <label>After: ${O(`intensity_after`,0,100)}</label>
    </div>

    <div class="form-section">
      <p><strong>PROMPTING EVENT for my emotion (who, what, when, where):</strong> What prompted the emotion?</p>
      ${A(`prompting_event`)}
    </div>

    <div class="form-section">
      <p><strong>IS MY EMOTION (or its intensity or duration) JUSTIFIED? Does it fit the facts? Is it effective?</strong></p>
      <p>List the facts that justify the emotion and those that do not. Check the answer that is mostly correct.</p>

      <div class="two-column-box">
        <div class="column-box">
          <h4 class="column-header">Justified</h4>
          ${A(`justified_facts`)}
          <p class="column-footer"><strong>JUSTIFIED: Go to problem solving</strong><br>(Emotion Regulation Worksheet 8)</p>
        </div>
        <div class="column-box">
          <h4 class="column-header">Not justified</h4>
          ${A(`not_justified_facts`)}
          <p class="column-footer"><strong>NOT JUSTIFIED: Continue</strong></p>
        </div>
      </div>
    </div>

    <div class="form-section">
      <p><strong>ACTION URGES:</strong> What do I feel like doing or saying?</p>
      ${A(`action_urges`)}
    </div>

    <div class="form-section">
      <p><strong>OPPOSITE ACTION:</strong> What are the actions opposite to my urges? What am I not doing because
         of my emotions? Describe both <em>what</em> and <em>how</em> to act opposite <strong>all the way</strong>
         in the situation.</p>
      ${A(`opposite_action`)}
    </div>

    <div class="form-section">
      <p><strong>WHAT I did:</strong> Describe in detail.</p>
      ${A(`what_i_did`)}
    </div>

    <div class="form-section">
      <p><strong>HOW I did it:</strong> Describe body language, facial expression, posture, gestures, and thoughts.</p>
      ${A(`how_i_did_it`)}
    </div>

    <div class="form-section">
      <p>What <strong>AFTEREFFECT</strong> did the opposite action have on me (my state of mind, other emotions,
         behavior, thoughts, memory, body, etc.)?</p>
      ${A(`aftereffect`)}
    </div>
  `}var ge=7,_e=3;function ve(){let e=(e,t)=>Array.from({length:_e},(n,r)=>`${E(`s${e}_${t}_${r+1}`)}`).join(``),t=Array.from({length:ge},(e,t)=>`
      <tr>
        <td class="step-number">${t+1}.</td>
        <td>${E(`step6_describe_${t+1}`)}</td>
        <td class="step-done-cell">${k(`step6_done_${t+1}`)}</td>
        <td>${E(`step6_what_happened_${t+1}`)}</td>
      </tr>
    `).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 8</h2>
      <p class="worksheet-ref">(Emotion Regulation Handout 12) (p. 1 of 2)</p>
      <h3 class="worksheet-name">Problem Solving to Change Emotions</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Select a prompting event that triggers a painful emotion. Select an event that can be changed.
      Turn the event into a problem to be solved. Follow the steps below and describe what happened.
    </p>

    <div class="form-row">
      <label>EMOTION NAME: ${E(`emotion_name`)}</label>
    </div>
    <div class="form-row">
      <label>INTENSITY (0–100) Before: ${O(`intensity_before`,0,100)}</label>
      <label>After: ${O(`intensity_after`,0,100)}</label>
    </div>

    <fieldset class="worksheet-step">
      <legend>1</legend>
      <p><strong>WHAT IS THE PROBLEM?</strong> Describe the problem prompting your emotions.
         What makes the situation a problem?</p>
      ${A(`problem_description`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>2</legend>
      <p><strong>CHECK THE FACTS TO MAKE SURE YOU HAVE THE RIGHT PROBLEM.</strong>
         Describe what you did to be sure of your facts.</p>
      <p class="worksheet-aside"><em>(See Emotion Regulation Worksheet 6 if you need help.)</em></p>
      ${A(`check_facts`)}

      <p><strong>REWRITE the problem</strong> if needed to stick with the facts.</p>
      ${A(`rewrite_problem`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>3</legend>
      <p><strong>WHAT IS A REALISTIC SHORT-TERM GOAL OF YOUR PROBLEM SOLVING?</strong>
         What has to happen for you to think you have made progress?</p>
      ${A(`short_term_goal`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>4</legend>
      <p><strong>BRAINSTORM SOLUTIONS:</strong> List as many solutions and coping strategies
         as you can think of. DON'T EVALUATE!</p>
      ${A(`brainstorm_solutions`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>5</legend>
      <p><strong>WHICH TWO IDEAS LOOK BEST</strong> (are most likely to meet your goal, are possible to do)?</p>
      <div class="form-row">
        <label>1. ${E(`best_idea_1`)}</label>
        <label>2. ${E(`best_idea_2`)}</label>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-cons-column">
          <h4>Solution 1</h4>
          <div class="pros-section">
            <strong>PROS</strong>
            ${e(1,`pros`)}
          </div>
          <div class="cons-section">
            <strong>CONS</strong>
            ${e(1,`cons`)}
          </div>
        </div>
        <div class="pros-cons-column">
          <h4>Solution 2</h4>
          <div class="pros-section">
            <strong>PROS</strong>
            ${e(2,`pros`)}
          </div>
          <div class="cons-section">
            <strong>CONS</strong>
            ${e(2,`cons`)}
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>6</legend>
      <p><strong>CHOOSE</strong> the solution to try; list the steps needed; check the steps
         you do and how well they work.</p>
      <table class="steps-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Describe</th>
            <th>&#10003; Done</th>
            <th>What happened?</th>
          </tr>
        </thead>
        <tbody>
          ${t}
        </tbody>
      </table>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>7</legend>
      <p><strong>DID YOU REACH YOUR GOAL?</strong> If so, describe. If not, what can you do next?</p>
      ${A(`goal_reached`)}

      <p><strong>IS THERE NOW A NEW PROBLEM TO BE SOLVED?</strong> If yes, describe, and problem-solve again.</p>
      ${A(`new_problem`)}
    </fieldset>
  `}function ye(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 9</h2>
      <h3 class="worksheet-name">Steps for Reducing Vulnerability to Emotion Mind</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      For each emotion regulation skill, note whether you used it during the week, and describe what you did.
    </p>

    <fieldset class="worksheet-step">
      <legend>A — Accumulate Positive Emotions: Short Term</legend>

      <div class="form-section">
        <p><strong>INCREASED daily pleasant activities:</strong></p>
        ${fe(`short_term_days`)}
        ${A(`short_term_describe`,{label:`Describe:`})}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>A — Accumulate Positive Emotions: Long Term; Building a Life Worth Living</legend>

      <div class="form-section">
        <p><strong>VALUES considered in deciding what goals to work on</strong>
        <span class="worksheet-aside">(see Emotion Regulation Handout 18)</span>:</p>
        ${A(`long_term_values`)}
      </div>

      <div class="form-section">
        <p><strong>LONG-TERM GOALS worked on (describe):</strong></p>
        ${A(`long_term_goals`)}
      </div>

      <div class="form-section">
        <p><strong>AVOIDED AVOIDING (describe):</strong></p>
        ${A(`avoided_avoiding`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>B — Mindfulness of Positive Experiences When They Occurred</legend>

      <div class="form-section">
        <p><strong>Focused (and refocused) attention on positive experiences:</strong></p>
        ${A(`mindful_positive_focus`)}
      </div>

      <div class="form-section">
        <p><strong>Distracted from worries if they showed up:</strong></p>
        ${A(`mindful_positive_distract`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Build Mastery</legend>

      <div class="form-section">
        <p><strong>Scheduled activities to build a sense of accomplishment:</strong></p>
        ${fe(`mastery_sched`)}
        ${A(`mastery_sched_describe`,{label:`Describe:`})}
      </div>

      <div class="form-section">
        <p><strong>Actually did something difficult, BUT possible:</strong></p>
        ${fe(`mastery_difficult`)}
        ${A(`mastery_difficult_describe`,{label:`Describe:`})}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>C — Cope Ahead</legend>

      <div class="form-section">
        <p><strong>Describe a situation that prompts unwanted emotions</strong>
        <span class="worksheet-aside">(fill out Steps 1 and 2 of checking the facts on Emotion Regulation Worksheet 5 if necessary)</span>:</p>
        ${A(`cope_ahead_situation`)}
      </div>

      <div class="form-section">
        <p><strong>Way that I imagined coping effectively (describe):</strong></p>
        ${A(`cope_ahead_coping`)}
      </div>

      <div class="form-section">
        <p><strong>Way that I imagined coping with new problems that might arise (describe):</strong></p>
        ${A(`cope_ahead_new_problems`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>PLEASE Skills — Have I…</legend>

      <div class="form-section">
        <p><strong>Treated Physica<u>L</u> illness?</strong></p>
        ${A(`please_physical_illness`)}
      </div>

      <div class="form-section">
        <p><strong>Balanced <u>E</u>ating?</strong></p>
        ${A(`please_eating`)}
      </div>

      <div class="form-section">
        <p><strong><u>A</u>voided mood-Altering substances?</strong></p>
        ${A(`please_substances`)}
      </div>

      <div class="form-section">
        <p><strong>Balanced <u>S</u>leep?</strong></p>
        ${A(`please_sleep`)}
      </div>

      <div class="form-section">
        <p><strong><u>E</u>xercised?</strong></p>
        ${A(`please_exercise`)}
      </div>
    </fieldset>
  `}function be(e){return e.includes(`
`)?`"""\n${e.replace(/\\/g,`\\\\`).replace(/"""/g,`\\"\\"\\"`)}"""`:`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`).replace(/\t/g,`\\t`).replace(/\r/g,`\\r`)}"`}function xe(e){if(e.startsWith(`"""`)){let t=e.slice(3,-3);return t.startsWith(`
`)&&(t=t.slice(1)),t.replace(/\\"/g,`"`).replace(/\\\\/g,`\\`)}return e.startsWith(`"`)?e.slice(1,-1).replace(/\\t/g,`	`).replace(/\\r/g,`\r`).replace(/\\n/g,`
`).replace(/\\"/g,`"`).replace(/\\\\/g,`\\`):e}function Se(e){let t=[];for(let[n,r]of Object.entries(e))typeof r==`boolean`||typeof r==`number`?t.push(`${n} = ${r}`):t.push(`${n} = ${be(r)}`);return t.join(`
`)+`
`}function Ce(e){let t={},n=e.split(`
`),r=0;for(;r<n.length;){let e=n[r].trim();if(r++,e===``||e.startsWith(`#`))continue;let i=e.indexOf(`=`);if(i===-1)continue;let a=e.slice(0,i).trim(),o=e.slice(i+1).trim();if(o.startsWith(`"""`)){if(o.endsWith(`"""`)&&o.length>6){t[a]=xe(o);continue}let e=[o];for(;r<n.length;){let t=n[r];if(r++,e.push(t),t.trimEnd().endsWith(`"""`))break}t[a]=xe(e.join(`
`));continue}if(o===`true`){t[a]=!0;continue}if(o===`false`){t[a]=!1;continue}if(/^-?\d+(\.\d+)?$/.test(o)){t[a]=Number(o);continue}if(o.startsWith(`"`)&&o.endsWith(`"`)){t[a]=xe(o);continue}t[a]=o}return t}function j(e=new Date){let t=e.getTimezoneOffset(),n=t<=0?`+`:`-`,r=Math.abs(t),i=String(Math.floor(r/60)).padStart(2,`0`),a=String(r%60).padStart(2,`0`);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}T${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}:${String(e.getSeconds()).padStart(2,`0`)}.${String(e.getMilliseconds()).padStart(3,`0`)}${n}${i}:${a}`}function we(e,t){return new Date(e).getTime()-new Date(t).getTime()}var Te={tracking:!1,fills:!1,notes:!1,newFill:!1},Ee={autosaveEnabled:!0,fillsSortBy:`updated_at`,fillsGroupByChapter:!1,fillsHideCompleted:!1,autoSyncEnabled:!0,autoReauthPrompt:!0,fullSyncOnLoad:!0,homeCollapsed:{...Te},moodHalfPoints:!0,moodRanges:!0,bookPassword:``},De=`modulepreload`,Oe=function(e){return`/freedbt/`+e},ke={},Ae=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Oe(t,n),t in ke)return;ke[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:De,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},je={persistenceBackend:Ne()?`fsa`:`indexeddb`,fsaDirectoryChosen:!1,fsaDeclined:!1,syncEnabled:!1,lastSyncedAt:null,googleEmail:null};function M(){let e=localStorage.getItem(c);if(!e)return{...je};try{let t=JSON.parse(e);return{...je,...t}}catch{return{...je}}}function Me(e){localStorage.setItem(c,JSON.stringify(e))}function Ne(){return`showDirectoryPicker`in window}function Pe(){return new Promise((e,t)=>{let n=indexedDB.open(u,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(`fills`)||e.createObjectStore(d),e.objectStoreNames.contains(`fsa_handle`)||e.createObjectStore(f),e.objectStoreNames.contains(`custom`)||e.createObjectStore(p)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(Error(`IndexedDB open failed: ${n.error?.message}`))})}function N(e,t){return Pe().then(n=>new Promise((r,i)=>{let a=n.transaction(e,`readonly`).objectStore(e).get(t);a.onsuccess=()=>r(a.result),a.onerror=()=>i(Error(`IDB get failed: ${a.error?.message}`))}))}function P(e,t,n){return Pe().then(r=>new Promise((i,a)=>{let o=r.transaction(e,`readwrite`).objectStore(e).put(n,t);o.onsuccess=()=>i(),o.onerror=()=>a(Error(`IDB put failed: ${o.error?.message}`))}))}function Fe(e,t){return Pe().then(n=>new Promise((r,i)=>{let a=n.transaction(e,`readwrite`).objectStore(e).delete(t);a.onsuccess=()=>r(),a.onerror=()=>i(Error(`IDB delete failed: ${a.error?.message}`))}))}function Ie(e){return Pe().then(t=>new Promise((n,r)=>{let i=t.transaction(e,`readonly`).objectStore(e).getAllKeys();i.onsuccess=()=>n(i.result),i.onerror=()=>r(Error(`IDB getAllKeys failed: ${i.error?.message}`))}))}function Le(e){return Pe().then(t=>new Promise((n,r)=>{let i=t.transaction(e,`readonly`),a=i.objectStore(e),o=a.getAllKeys(),s=a.getAll();i.oncomplete=()=>{let e=o.result,t=s.result;n(e.map((e,n)=>({key:e,value:t[n]})))},i.onerror=()=>r(Error(`IDB getAll failed: ${i.error?.message}`))}))}var Re=null;async function ze(){let e=await window.showDirectoryPicker({mode:`readwrite`});Re=e,await P(f,`directory`,e);let t=M();t.fsaDirectoryChosen=!0,t.persistenceBackend=`fsa`,Me(t);let n=await Be(e);return n>0&&console.log(`Migrated ${n} existing fill(s) from browser storage to chosen folder`),e}async function Be(e){let t=await Le(d),n=0;for(let{key:r,value:i}of t)if(r.endsWith(`.toml`)){try{await e.getFileHandle(r);continue}catch{}try{let t=await(await e.getFileHandle(r,{create:!0})).createWritable();await t.write(i),await t.close(),n++}catch(e){console.error(`Failed to migrate ${r} to FSA directory:`,e)}}return n}async function F(){if(Re)return await Re.queryPermission({mode:`readwrite`})===`granted`||await Re.requestPermission({mode:`readwrite`})===`granted`?Re:(Re=null,null);let e=await N(f,`directory`);if(!e)return null;if(await e.queryPermission({mode:`readwrite`})===`granted`)return Re=e,e;try{if(await e.requestPermission({mode:`readwrite`})===`granted`)return Re=e,e}catch{}return null}function Ve(e,t,n=1){if(n<1)throw Error(`fillFilename: index must be >= 1, got ${n}`);return n===1?`${e}_${t}.toml`:`${e}_${t}_${n}.toml`}function He(e){let t=e.match(/^(.+?)_(\d{4}-\d{2}-\d{2})(?:_(\d+))?\.toml$/);if(!t)return null;let n=t[3]?parseInt(t[3],10):1;return n<1?null:{formId:t[1],date:t[2],index:n}}function Ue(e){let t={_form_id:e.metadata.form_id,_date:e.metadata.date,_index:e.metadata.index,_completed:e.metadata.completed,_created_at:e.metadata.created_at,_updated_at:e.metadata.updated_at};for(let[n,r]of Object.entries(e.data))t[n]=r;return Se(t)}function We(e){let t=Ce(e),n=t._index,r={form_id:String(t._form_id??``),date:String(t._date??``),index:typeof n==`number`&&n>=1?n:1,completed:t._completed===!0,created_at:String(t._created_at??``),updated_at:String(t._updated_at??``)},i={};for(let[e,n]of Object.entries(t))e.startsWith(`_`)||(i[e]=String(n));return{metadata:r,data:i}}function I(){return M().persistenceBackend}async function Ge(e){let t=Ue(e),n=Ve(e.metadata.form_id,e.metadata.date,e.metadata.index);if(I()===`fsa`){let e=await F();if(e){let r=await(await e.getFileHandle(n,{create:!0})).createWritable();await r.write(t),await r.close(),await P(d,n,t),Ke(n,t);return}}await P(d,n,t),Ke(n,t)}function Ke(e,t){Ae(async()=>{let{scheduleSingleUpload:e}=await Promise.resolve().then(()=>ha);return{scheduleSingleUpload:e}},void 0).then(({scheduleSingleUpload:n})=>{n(e,t)}).catch(()=>{})}async function qe(e,t,n=1){let r=Ve(e,t,n),i=e=>{let t=We(e);return t.metadata.index=n,t};if(I()===`fsa`){let e=await F();if(e)try{return i(await(await(await e.getFileHandle(r)).getFile()).text())}catch{return null}}let a=await N(d,r);return a?i(a):null}async function Je(e,t,n=1){let r=Ve(e,t,n);if(I()===`fsa`){let e=await F();if(e){try{await e.removeEntry(r)}catch{}await Fe(d,r),Ye(r);return}}await Fe(d,r),Ye(r)}function Ye(e){Ae(async()=>{let{syncDeletion:e}=await Promise.resolve().then(()=>ha);return{syncDeletion:e}},void 0).then(({syncDeletion:t})=>{t(e)}).catch(()=>{})}async function Xe(){let e=[],t=(e,t)=>{let n=He(e);n&&(t.metadata.index=n.index)};if(I()===`fsa`){let n=await F();if(n){for await(let[r,i]of n.entries())if(!(i.kind!==`file`||!r.endsWith(`.toml`))&&He(r))try{let n=We(await(await i.getFile()).text());t(r,n),e.push(n)}catch{}return e.sort((e,t)=>t.metadata.date.localeCompare(e.metadata.date))}}let n=await Le(d);for(let{key:r,value:i}of n)if(r.endsWith(`.toml`)&&He(r))try{let n=We(i);t(r,n),e.push(n)}catch{}return e.sort((e,t)=>t.metadata.date.localeCompare(e.metadata.date))}async function Ze(e,t){let n=await Xe(),r=0;for(let i of n)i.metadata.form_id===e&&i.metadata.date===t&&i.metadata.index>r&&(r=i.metadata.index);return r+1}async function Qe(){let e=[];if(I()===`fsa`){let t=await F();if(t){for await(let[n,r]of t.entries()){if(r.kind!==`file`||!n.endsWith(`.toml`))continue;let t=await(await r.getFile()).text();e.push({filename:n,content:t})}return e}}let t=await Le(d);for(let{key:n,value:r}of t)e.push({filename:n,content:r});return e}async function $e(e){let t=0;for(let{filename:n,content:r}of e)if(n.endsWith(`.toml`))try{if(We(r),I()===`fsa`){let e=await F();if(e){let i=await(await e.getFileHandle(n,{create:!0})).createWritable();await i.write(r),await i.close(),await P(d,n,r),t++;continue}}await P(d,n,r),t++}catch{}return t>0&&et(),t}function et(){R().autoSyncEnabled&&Ae(async()=>{let{fullSync:e}=await Promise.resolve().then(()=>ha);return{fullSync:e}},void 0).then(({fullSync:e})=>{e().catch(()=>{})}).catch(()=>{})}function tt(e){let t={};for(let[n,r]of Object.entries(e.data))r!==``&&r!==`false`&&(t[n]=r);return{metadata:e.metadata,data:t}}async function nt(){return(await Qe()).map(({filename:e,content:t})=>({filename:e,content:Ue(tt(We(t)))}))}async function rt(){let e=await Ie(d);for(let t of e)await Fe(d,t)}var it={};function at(){return JSON.stringify({_doc:`freedbt diary card customization. Keys starting with _ are ignored.`,_updated_at:j(),_daily_group_keys:`urges emotions drugs actions`,_daily_column_keys:`urge_use urge_suicide urge_self_harm emo_sad emo_shame emo_anger emo_fear emo_joy drug_illicit_count drug_illicit_specify drug_alcohol_count drug_alcohol_specify drug_meds_count drug_meds_specify act_self_harm act_lies act_anger_behaviours act_isolate act_avoid skills_used reinforcement`,_before_after_keys:`urge_use urge_quit_therapy urge_self_harm belief_control_emotions belief_control_behaviours belief_control_thoughts`,_repurpose_example:{repurpose_daily_columns:{drug_meds_count:{new_label:`vape #`}}},hide_daily_groups:[],hide_daily_columns:[],hide_before_after:[],repurpose_daily_groups:{},repurpose_daily_columns:{},repurpose_before_after:{}},null,2)}function ot(e){if(!e||typeof e!=`object`)return;let t={};for(let[n,r]of Object.entries(e))if(r&&typeof r==`object`){let e=r.new_label;typeof e==`string`&&(t[n]={new_label:e})}return t}function st(e){if(!e||typeof e!=`object`)return{};let t=e,n={};Array.isArray(t.hide_daily_groups)&&(n.hide_daily_groups=t.hide_daily_groups.filter(e=>typeof e==`string`)),Array.isArray(t.hide_daily_columns)&&(n.hide_daily_columns=t.hide_daily_columns.filter(e=>typeof e==`string`)),Array.isArray(t.hide_before_after)&&(n.hide_before_after=t.hide_before_after.filter(e=>typeof e==`string`));let r=ot(t.repurpose_daily_groups);r&&(n.repurpose_daily_groups=r);let i=ot(t.repurpose_daily_columns);i&&(n.repurpose_daily_columns=i);let a=ot(t.repurpose_before_after);return a&&(n.repurpose_before_after=a),n}async function ct(){try{if(I()===`fsa`){let e=await F();if(e){let t;try{t=await(await(await e.getFileHandle(m)).getFile()).text()}catch{t=at();let n=await(await e.getFileHandle(m,{create:!0})).createWritable();await n.write(t),await n.close(),await P(p,`config`,t)}return it=st(JSON.parse(t)),it}}else{let e=await N(p,`config`);if(e)return it=st(JSON.parse(e)),it}}catch{}return it={},it}function lt(){return it}async function ut(){try{if(I()===`fsa`){let e=await F();if(e)return await(await(await e.getFileHandle(m)).getFile()).text()}else return await N(`custom`,`config`)??null}catch{}return null}async function dt(e){if(I()===`fsa`){let t=await F();if(t){let n=await(await t.getFileHandle(m,{create:!0})).createWritable();await n.write(e),await n.close()}}await P(p,`config`,e);try{it=st(JSON.parse(e))}catch{it={}}}async function ft(){try{if(I()===`fsa`){let e=await F();if(e)try{return await(await(await e.getFileHandle(C)).getFile()).text()}catch{return null}}return await N(`custom`,`mood_records`)??null}catch{return null}}async function pt(e){if(I()===`fsa`){let t=await F();if(t){let n=await(await t.getFileHandle(C,{create:!0})).createWritable();await n.write(e),await n.close()}}await P(p,ee,e)}async function mt(){let e=await ft();if(e)try{return JSON.parse(e)}catch{return[]}return[]}async function ht(e){await pt(JSON.stringify(e,null,2)),_t()}async function gt(e){let t=await mt();t.push(e),await ht(t)}function _t(){Ae(async()=>{let{scheduleMergeSync:e}=await Promise.resolve().then(()=>ha);return{scheduleMergeSync:e}},void 0).then(({scheduleMergeSync:e})=>{e(C)}).catch(()=>{})}var vt={...Ee};function yt(e){if(!e||typeof e!=`object`)return{};let t=e,n={};if(typeof t.autosaveEnabled==`boolean`&&(n.autosaveEnabled=t.autosaveEnabled),(t.fillsSortBy===`updated_at`||t.fillsSortBy===`created_at`)&&(n.fillsSortBy=t.fillsSortBy),typeof t.fillsGroupByChapter==`boolean`&&(n.fillsGroupByChapter=t.fillsGroupByChapter),typeof t.fillsHideCompleted==`boolean`&&(n.fillsHideCompleted=t.fillsHideCompleted),typeof t.autoSyncEnabled==`boolean`&&(n.autoSyncEnabled=t.autoSyncEnabled),typeof t.autoReauthPrompt==`boolean`&&(n.autoReauthPrompt=t.autoReauthPrompt),typeof t.fullSyncOnLoad==`boolean`&&(n.fullSyncOnLoad=t.fullSyncOnLoad),t.homeCollapsed&&typeof t.homeCollapsed==`object`){let e=t.homeCollapsed,r={...Te};typeof e.tracking==`boolean`&&(r.tracking=e.tracking),typeof e.fills==`boolean`&&(r.fills=e.fills),typeof e.notes==`boolean`&&(r.notes=e.notes),typeof e.newFill==`boolean`&&(r.newFill=e.newFill),n.homeCollapsed=r}return typeof t.moodHalfPoints==`boolean`&&(n.moodHalfPoints=t.moodHalfPoints),typeof t.moodRanges==`boolean`&&(n.moodRanges=t.moodRanges),typeof t.bookPassword==`string`&&(n.bookPassword=t.bookPassword),n}async function bt(){try{if(I()===`fsa`){let e=await F();if(e)try{return await(await(await e.getFileHandle(w)).getFile()).text()}catch{return null}}return await N(`custom`,`synced_settings`)??null}catch{return null}}async function xt(e){if(I()===`fsa`){let t=await F();if(t){let n=await(await t.getFileHandle(w,{create:!0})).createWritable();await n.write(e),await n.close()}}await P(p,te,e)}async function L(){let e=await bt();if(e)try{return vt={...Ee,...yt(JSON.parse(e))},vt}catch{}let t=localStorage.getItem(c);if(t)try{let e=JSON.parse(t);if(e.ui){vt={...Ee,...yt(e.ui)};let t={_updated_at:j(),...vt};return await xt(JSON.stringify(t,null,2)),vt}}catch{}return vt={...Ee},vt}function R(){return vt}async function z(e){let t={_updated_at:j(),...e};await xt(JSON.stringify(t,null,2)),vt={...e},St()}function St(){Ae(async()=>{let{scheduleSyncedSettingsUpload:e}=await Promise.resolve().then(()=>ha);return{scheduleSyncedSettingsUpload:e}},void 0).then(({scheduleSyncedSettingsUpload:e})=>{e()}).catch(()=>{})}async function Ct(){try{if(I()===`fsa`){let e=await F();if(e)try{return await(await(await e.getFileHandle(ne)).getFile()).text()}catch{}}return await N(`custom`,`sleep_records`)??null}catch{return null}}async function wt(e){if(I()===`fsa`){let t=await F();if(t){let n=await(await t.getFileHandle(ne,{create:!0})).createWritable();await n.write(e),await n.close()}}await P(p,re,e)}async function Tt(){let e=await Ct();if(e)try{return JSON.parse(e)}catch{return null}return null}async function Et(){try{if(I()===`fsa`){let e=await F();if(e)try{return await(await(await e.getFileHandle(ie)).getFile()).text()}catch{return null}}return await N(`custom`,`notes`)??null}catch{return null}}async function Dt(e){if(I()===`fsa`){let t=await F();if(t){let n=await(await t.getFileHandle(ie,{create:!0})).createWritable();await n.write(e),await n.close()}}await P(p,ae,e)}async function Ot(){let e=await Et();if(e)try{let t=JSON.parse(e);if(Array.isArray(t))return t}catch{return[]}return[]}async function kt(e){await Dt(JSON.stringify(e,null,2)),At()}function At(){Ae(async()=>{let{scheduleMergeSync:e}=await Promise.resolve().then(()=>ha);return{scheduleMergeSync:e}},void 0).then(({scheduleMergeSync:e})=>{e(ie)}).catch(()=>{})}var jt=[`🆘`,`😞`,`🙁`,`😐`,`🙂`,`😁`,`✨`],Mt=[`crisis`,`bad`,`pretty bad`,`so-so`,`pretty good`,`good`,`perfect`];function Nt(e){let{btwPoints:t,modal:n,onChange:r}=e,i=e.initialMood?{phase:`range`,lo:e.initialMood[0],hi:e.initialMood[1]}:{phase:`none`},a=document.createElement(`div`);a.className=`mood-sel`;let o=document.createElement(`div`);o.className=t?`mood-sel-track`:`mood-sel-track mood-sel-track-spaced`;let s=document.createElement(`div`);s.className=`mood-sel-bar`;let c=new Map;for(let e=0;e<jt.length;e++){if(t&&e>0){let t=document.createElement(`span`);t.className=`mood-sel-btw`,t.dataset.value=String(e-.5),o.appendChild(t),c.set(e-.5,t)}let n=document.createElement(`span`);n.className=`mood-sel-point`,n.textContent=jt[e],n.title=`${e}: ${Mt[e]}`,n.dataset.value=String(e),o.appendChild(n),c.set(e,n)}o.appendChild(s),a.appendChild(o);function l(e){let i;if(t){let t=e.clientX,n=0,r=1/0;for(let[e,i]of c){let a=i.getBoundingClientRect(),o=a.left+a.width/2,s=Math.abs(t-o);s<r&&(r=s,n=e)}i=n}else{let t=e.target.closest(`[data-value]`);if(!t)return;i=parseFloat(t.dataset.value)}n?d(i):u(i),f(),r?.(p())}function u(e){i=i.phase===`range`&&i.lo===e&&i.hi===e?{phase:`none`}:{phase:`range`,lo:e,hi:e}}function d(e){switch(i.phase){case`none`:i={phase:`first`,start:e};break;case`first`:i={phase:`range`,lo:Math.min(i.start,e),hi:Math.max(i.start,e)};break;case`range`:i=e>=i.lo&&e<=i.hi?{phase:`none`}:{phase:`first`,start:e};break}}function f(){let e=p();if(!e){s.style.opacity=`0`;return}let[t,n]=e,r=c.get(t),i=c.get(n);if(!r||!i){s.style.opacity=`0`;return}s.style.left=`${r.offsetLeft}px`,s.style.width=`${i.offsetLeft+i.offsetWidth-r.offsetLeft}px`,s.style.opacity=`1`}function p(){switch(i.phase){case`none`:return null;case`first`:return[i.start,i.start];case`range`:return[i.lo,i.hi]}}if(o.addEventListener(`click`,l),e.initialMood){let e=new ResizeObserver(()=>{f(),e.disconnect()});e.observe(a)}return{element:a,getValue:p,destroy(){o.removeEventListener(`click`,l),a.innerHTML=``}}}var Pt=200,B=Pt/2,V=Pt/2,Ft=88,It=86,Lt=73,Rt=79,zt=60,Bt=78,Vt=It,Ht=15;function Ut(e,t){return Math.round(e/t)*t%60}function Wt(e){return e/60*2*Math.PI-Math.PI/2}function Gt(e,t,n){return e+t*Math.cos(n)}function Kt(e,t,n){return e+t*Math.sin(n)}function qt(e){return e.toString().padStart(2,`0`)}function Jt(e,t){if(t)return qt(e);let n=e%12||12;return n>=10?n.toString():`${n}${e<12?`a`:`p`}`}function Yt(e){let{minuteResolution:t,hour24:n,hourGridDims:r,maxClockDiameter:i,vertHours:a,onChange:o}=e,[s,c]=r;if(s*c!==24)throw Error(`hourGridDims must multiply to 24, got ${s}×${c}`);if(60%t!=0)throw Error(`minuteResolution must divide 60, got ${t}`);let l=Ut(e.initDatetime.getMinutes(),t),u=e.initDatetime.getHours(),d=e.initDatetime.getFullYear(),f=e.initDatetime.getMonth(),p=e.initDatetime.getDate(),m=document.createElement(`div`);m.className=`dtp`,_();function h(){return new Date(d,f,p,u,l,0,0)}function g(){o?.(h())}function _(){let e=`<div class="dtp-clock-wrap" style="${i==null?``:`max-width:${i}px;margin:0 auto`}">${v()}</div>`,t=`<div class="dtp-hgrid" style="grid-template-columns:repeat(${c},1fr)">${y()}</div>`,n=`<div class="dtp-daterow"><button class="dtp-datebtn dtp-prev" aria-label="Previous day">◀</button><span class="dtp-datetext">${qt(p)} / ${qt(f+1)} / ${d}</span><button class="dtp-datebtn dtp-next" aria-label="Next day">\u25B6</button></div>`;a?m.innerHTML=`<div class="dtp-vert-row">${t}${e}</div>`+n:m.innerHTML=e+t+n,b()}function v(){let e=[];e.push(`<circle cx="${B}" cy="${V}" r="${Ft}" class="dtp-face"/>`);for(let t=0;t<60;t+=5){let n=Wt(t);e.push(`<line x1="${Gt(B,Lt,n)}" y1="${Kt(V,Lt,n)}" x2="${Gt(B,It,n)}" y2="${Kt(V,It,n)}" class="dtp-tick dtp-tick-maj"/>`),e.push(`<text x="${Gt(B,zt,n)}" y="${Kt(V,zt,n)}" text-anchor="middle" dominant-baseline="central" class="dtp-lbl">${qt(t)}</text>`)}if(t<5)for(let n=0;n<60;n+=t){if(n%5==0)continue;let t=Wt(n);e.push(`<line x1="${Gt(B,Rt,t)}" y1="${Kt(V,Rt,t)}" x2="${Gt(B,It,t)}" y2="${Kt(V,It,t)}" class="dtp-tick"/>`)}let n=Wt(l);return e.push(`<line x1="${B}" y1="${V}" x2="${Gt(B,Bt,n)}" y2="${Kt(V,Bt,n)}" class="dtp-hand"/>`,`<circle cx="${B}" cy="${V}" r="3" class="dtp-cdot"/>`,`<circle cx="${Gt(B,Vt,n)}" cy="${Kt(V,Vt,n)}" r="5" class="dtp-sdot"/>`),`<svg class="dtp-svg" viewBox="0 0 ${Pt} ${Pt}">${e.join(``)}</svg>`}function y(){let e=new Date().getHours(),t=[];for(let r=0;r<24;r++){let i=r,a=[`dtp-hcell`];i===u&&a.push(`dtp-hsel`),i===e&&a.push(`dtp-hnow`),t.push(`<button class="${a.join(` `)}" data-h="${i}">${Jt(i,n)}</button>`)}return t.join(``)}function b(){let e=m.querySelector(`.dtp-svg`);e?.addEventListener(`click`,n=>{let r=e.getBoundingClientRect(),i=Pt/r.width,a=(n.clientX-r.left)*i-B,o=(n.clientY-r.top)*i-V,s=Math.sqrt(a*a+o*o);if(s<Ht||s>Ft+5)return;let c=Math.atan2(o,a)+Math.PI/2;c<0&&(c+=2*Math.PI),l=Ut(c/(2*Math.PI)*60,t),_(),g()});for(let e of m.querySelectorAll(`.dtp-hcell`))e.addEventListener(`click`,()=>{u=parseInt(e.dataset.h,10),_(),g()});m.querySelector(`.dtp-prev`)?.addEventListener(`click`,()=>x(-1)),m.querySelector(`.dtp-next`)?.addEventListener(`click`,()=>x(1))}function x(e){let t=new Date(d,f,p+e);d=t.getFullYear(),f=t.getMonth(),p=t.getDate(),_(),g()}return{element:m,getDatetime:h,destroy(){m.innerHTML=``}}}function Xt(e){let{initDatetime:t,initBackMinutes:n,stackThresholdPx:r,onChange:i,minuteResolution:a,hour24:o,hourGridDims:s,maxClockDiameter:c,vertHours:l}=e,u=new Date(t.getTime()-n*6e4);function d(){i?.(f.getDatetime(),p.getDatetime())}let f=Yt({initDatetime:u,minuteResolution:a,hour24:o,hourGridDims:s,maxClockDiameter:c,vertHours:l,onChange:()=>d()}),p=Yt({initDatetime:t,minuteResolution:a,hour24:o,hourGridDims:s,maxClockDiameter:c,vertHours:l,onChange:()=>d()}),m=document.createElement(`div`);m.className=`dtp-range dtp-range-stacked`;let h=document.createElement(`div`);h.className=`dtp-range-panel`,h.appendChild(f.element);let g=document.createElement(`div`);g.className=`dtp-range-panel`,g.appendChild(p.element);for(let[e,t]of[[h,`From`],[g,`To`]]){let n=e.querySelector(`.dtp-clock-wrap`);if(n){let e=document.createElement(`div`);e.className=`dtp-range-label`,e.textContent=t,n.prepend(e)}}m.appendChild(h),m.appendChild(g);let _=new ResizeObserver(e=>{for(let t of e){let e=t.contentBoxSize[0].inlineSize;m.classList.toggle(`dtp-range-stacked`,e<r)}});return _.observe(m),{element:m,getFrom:()=>f.getDatetime(),getTo:()=>p.getDatetime(),destroy(){_.disconnect(),f.destroy(),p.destroy(),m.innerHTML=``}}}function Zt(e,t){let n=Math.round(Math.abs(t-e)/6e4);return n<60?`${n}m`:`${Math.round(n/6)/10}h`}function Qt(e,t){let n=e.getHours(),r=e.getMinutes(),i=String(r).padStart(2,`0`);if(t)return`${n}:${i}`;let a=n>=12?`pm`:`am`;return`${n%12||12}:${i}${a}`}function $t(e,t,n,r,i){let a=``;if(e){let[t,n]=e;a+=t===n?`Mood ${t}`:`Mood ${t}-${n}`}else a+=`No mood`;let o=Qt(new Date(t),r),s=Qt(new Date(n),r),c=Zt(t,n);return a+=`, ${o} - ${s} (${c})`,i?a+`. `:a+`.`}function en(e,t,n,r){let i=document.createElement(`div`);i.className=`mood-rec-preview`;let a=new Date(n.from),o=new Date(n.to),s=a.toLocaleDateString(`en`,{month:`short`,day:`numeric`}),c=document.createElement(`span`);c.className=`mood-rec-ptext`;let l=t.length>0;if(c.textContent=`${s}: ${$t(e,a.getTime(),o.getTime(),r,l)}`,i.appendChild(c),t){let e=document.createElement(`span`);e.className=`mood-rec-note`,e.textContent=t,i.appendChild(e)}return i}function tn(e){let{mood_opt:t,time_opt:n,onAdd:r,onCancel:i,initialNote:a,lastRecordEnd:o}=e,s=n.hour24,c=a??``,l=!!a,u=Nt({...t,onChange:()=>S()}),d=Xt({...n,onChange:()=>S()}),f=document.createElement(`div`);f.className=`mood-rec`;let p=document.createElement(`div`);p.className=`mood-rec-mood`,p.appendChild(u.element);let m=document.createElement(`div`);m.className=`mood-rec-preview`;let h=document.createElement(`span`);h.className=`mood-rec-ptext`;let g=document.createElement(`span`);g.className=`mood-rec-note`,g.contentEditable=`true`,g.textContent=l?c:`note`,g.style.display=l?``:`none`,g.addEventListener(`input`,()=>{c=g.textContent||``}),g.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),g.blur())}),g.addEventListener(`paste`,e=>{e.preventDefault();let t=e.clipboardData?.getData(`text/plain`)??``;document.execCommand(`insertText`,!1,t),c=g.textContent||``});let _=document.createElement(`button`);_.className=`mood-rec-note-tog`,_.textContent=l?`×`:`+note`,_.title=l?`Remove note`:`Add note`,_.addEventListener(`click`,()=>{if(l)l=!1,c=``,g.textContent=`note`,g.style.display=`none`,_.textContent=`+`,_.title=`Add note`;else{l=!0,c=`note`,g.style.display=``,_.textContent=`×`,_.title=`Remove note`,g.focus();let e=document.createRange();e.selectNodeContents(g);let t=window.getSelection();t?.removeAllRanges(),t?.addRange(e)}S()});let v=document.createElement(`button`);v.className=`mood-rec-btn mood-rec-btn-add`,v.textContent=`add`,v.addEventListener(`click`,()=>r?.(C()));let y=document.createElement(`button`);y.className=`mood-rec-btn mood-rec-btn-cancel`,y.textContent=`cancel`,y.addEventListener(`click`,()=>i?.());let b=document.createElement(`span`);b.className=`mood-rec-overlap-warn`,m.appendChild(h),m.appendChild(g),m.appendChild(_),m.appendChild(v),m.appendChild(y),m.appendChild(b);let x=document.createElement(`div`);x.className=`mood-rec-dt`,x.appendChild(d.element),f.appendChild(p),f.appendChild(m),f.appendChild(x);function S(){let e=u.getValue(),t=d.getFrom(),n=d.getTo();h.textContent=$t(e,t.getTime(),n.getTime(),s,l),o&&t<o?(b.textContent=`Overlaps last record ending ${Qt(o,s)}`,b.style.display=`inline`):(b.textContent=``,b.style.display=``)}S();function C(){return{note:l?c:``,mood:u.getValue(),dtrange:{from:d.getFrom(),to:d.getTo()}}}return{element:f,getValue:C,destroy(){u.destroy(),d.destroy(),f.innerHTML=``}}}function nn(e,t,n={}){let r=n.hour24??!1,i=n.emptyMessage??`No mood records saved.`,a=t.filter(e=>!e.tombstoned_at);if(e.innerHTML=``,a.length===0){e.textContent=i;return}for(let t of a){let n=en(t.mood,t.note,t.dtrange,r);e.appendChild(n)}}var rn=900,H={top:10,right:30,bottom:45,left:55},an=50,on=22,sn=280,cn=30,ln=12,un=7,dn=30,fn=864e5,pn=30,mn=rn-H.left-H.right;function hn(e){return e?`hsl(${(e[0]+e[1])/2/5*120}, 60%, 52%)`:`#aaa`}function gn(e){return j(new Date(e)).slice(0,10)}function _n(e){let t=typeof e==`number`?new Date(e):e;return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}function vn(e,t){return e.map((n,r)=>{let i=e.slice(Math.max(0,r-t+1),r+1);return{date:n.date,hours:i.reduce((e,t)=>e+t.hours,0)/i.length}})}function yn(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function bn(e){let t=new Map;for(let n of e){let e=_n(n.endTime),r=t.get(e),i=n.minutesAsleep/60;r?r.push(i):t.set(e,[i])}let n=[];for(let[e,r]of t)if(n.push({date:e,hours:r.reduce((e,t)=>e+t,0)}),r.length>1)for(let t of r)n.push({date:e,hours:t,isFragment:!0});return n.sort((e,t)=>e.date-t.date)}function xn(e,t,n,r,i,a){let{moodLaneH:o,chartH:s}=a,c=s-H.top-H.bottom,l=o+s,u=e.filter(e=>e.date>=n&&e.date<=r),d=t.filter(e=>{let t=new Date(e.dtrange.from).getTime();return new Date(e.dtrange.to).getTime()>n&&t<r});if(u.length===0&&d.length===0)return`<p style="color:#888">No data in selected range.</p>`;let f=e.length>0,p=u.filter(e=>!e.isFragment),m=i>0?vn(p,i):[],h=r-n,g=h/fn,_=e=>H.left+(e-n)/h*mn,v=e=>o+H.top+c-e/ln*c,y=[];if(y.push(`<svg viewBox="0 0 ${rn} ${l}" style="width:100%;max-width:${rn}px;height:auto;font-family:system-ui,sans-serif;font-size:11px">`),o>0){let e=(o-on)/2;for(let t of d){let i=Math.max(new Date(t.dtrange.from).getTime(),n),a=Math.min(new Date(t.dtrange.to).getTime(),r),o=_(i),s=Math.max(6,_(a)-o),c=t.mood?`${t.mood[0]}\u2013${t.mood[1]}`:`?`,l=new Date(t.dtrange.from).toLocaleString(),u=new Date(t.dtrange.to).toLocaleString(),d=`${yn(t.note)}\nMood: ${c}\n${l} \u2013 ${u}`;y.push(`<rect x="${o.toFixed(1)}" y="${e}" width="${s.toFixed(1)}" height="${on}" rx="8" ry="8" fill="${hn(t.mood)}" opacity="0.75" style="cursor:pointer" data-mood-note="${yn(t.note)}" data-mood-val="${c}" data-mood-range="${yn(l)} \u2013 ${yn(u)}"><title>${d}</title></rect>`)}y.push(`<text x="${H.left-5}" y="${o/2}" text-anchor="end" dominant-baseline="middle" fill="#777" font-size="10">Mood</text>`),y.push(`<line x1="${H.left}" y1="${o}" x2="${rn-H.right}" y2="${o}" stroke="#ddd"/>`)}if(f)for(let e=0;e<=ln;e+=1){let t=v(e);e%2==0?(y.push(`<line x1="${H.left}" y1="${t.toFixed(1)}" x2="${rn-H.right}" y2="${t.toFixed(1)}" stroke="#d8d8d8"/>`),y.push(`<text x="${H.left-8}" y="${t.toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#888">${e}h</text>`)):y.push(`<line x1="${H.left}" y1="${t.toFixed(1)}" x2="${rn-H.right}" y2="${t.toFixed(1)}" stroke="#e8e8e8"/>`)}else{let e=v(0);y.push(`<text x="${H.left-8}" y="${e.toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#888">0h</text>`)}let b;b=Math.ceil(g/22);for(let e=0;e<=g;e+=b){let t=n+e*fn,r=_(t),i=new Date(t).toLocaleDateString(`en`,{month:`short`,day:`numeric`});y.push(`<line x1="${r.toFixed(1)}" y1="${o+H.top}" x2="${r.toFixed(1)}" y2="${v(0).toFixed(1)}" stroke="#d8d8d8"/>`);let a=o+s-5;y.push(`<text x="${r.toFixed(1)}" y="${a}" text-anchor="end" fill="#888" font-size="10" transform="rotate(${pn},${r.toFixed(1)},${a})">${i}</text>`)}if(m.length>1){let e=m.map((e,t)=>`${t===0?`M`:`L`}${_(e.date).toFixed(1)},${v(e.hours).toFixed(1)}`).join(` `);y.push(`<path d="${e}" fill="none" stroke="#3b82f6" stroke-width="2.5" opacity="0.7"/>`)}let x=u.filter(e=>e.isFragment);for(let e of x){let t=new Date(e.date).toLocaleDateString(`en`,{weekday:`short`,month:`short`,day:`numeric`});y.push(`<circle cx="${_(e.date).toFixed(1)}" cy="${v(e.hours).toFixed(1)}" r="2.5" fill="#f59e0b" opacity="0.55"><title>${t}: ${e.hours.toFixed(1)}h (session)</title></circle>`)}for(let e of p){let t=new Date(e.date).toLocaleDateString(`en`,{weekday:`short`,month:`short`,day:`numeric`});y.push(`<circle cx="${_(e.date).toFixed(1)}" cy="${v(e.hours).toFixed(1)}" r="3.5" fill="#3b82f6" opacity="0.5"><title>${t}: ${e.hours.toFixed(1)}h</title></circle>`)}if(y.push(`<line x1="${H.left}" y1="${o+H.top}" x2="${H.left}" y2="${v(0).toFixed(1)}" stroke="#ccc"/>`),y.push(`<line x1="${H.left}" y1="${v(0).toFixed(1)}" x2="${rn-H.right}" y2="${v(0).toFixed(1)}" stroke="#ccc"/>`),f){let e=o+s/2;y.push(`<text x="15" y="${e}" text-anchor="middle" dominant-baseline="middle" fill="#666" font-size="11" transform="rotate(-90,15,${e})">Sleep (hours)</text>`)}return y.push(`</svg>`),y.join(`
`)}function Sn(e){let t=e.showMoodRecords,n=e.sleep.length===0,r=e.height??(n?cn:sn),i=e.defaultRangeDays??dn,a=e.showDateRangeControl??!0,o=e.showRollingAvgControl??!0,s=e.sleep,c=t?e.moods??[]:[],l=t?an:0,u=_n(Date.now()),d=e.startDate??u-i*fn,f=e.endDate??u+fn,p=document.createElement(`div`);p.className=`sleep-mood-plot`;let m=new AbortController,{signal:h}=m,g=null,_=null,v=null;if(a||o){let e=document.createElement(`div`);if(e.style.cssText=`display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px`,a){let t=document.createElement(`label`);g=document.createElement(`input`),g.type=`date`,g.value=gn(d),t.append(`From `,g);let n=document.createElement(`label`);_=document.createElement(`input`),_.type=`date`,_.value=gn(f-fn),n.append(`To `,_),e.append(t,n)}if(o){let t=document.createElement(`label`);v=document.createElement(`input`),v.type=`number`,v.value=String(un),v.min=`0`,v.max=`30`,v.style.width=`50px`,t.append(`Rolling avg `,v,` days`),e.append(t)}p.appendChild(e)}let y=document.createElement(`div`);p.appendChild(y);let b=document.createElement(`div`);t&&(b.style.cssText=`min-height:20px;font-size:13px;color:#555;margin-top:4px`,p.appendChild(b));function x(){return g?new Date(g.value).getTime():d}function S(){return _?new Date(_.value).getTime()+fn:f}function C(){if(v){let e=parseInt(v.value,10);return isNaN(e)?un:e}return un}function ee(){let e=x(),t=S();isNaN(e)||isNaN(t)||e>=t||(y.innerHTML=xn(s,c,e,t,C(),{moodLaneH:l,chartH:r}))}return g&&g.addEventListener(`change`,ee,{signal:h}),_&&_.addEventListener(`change`,ee,{signal:h}),v&&v.addEventListener(`input`,ee,{signal:h}),t&&y.addEventListener(`click`,e=>{let t=e.target.closest?.(`rect[data-mood-note]`);t&&(b.textContent=`"${t.getAttribute(`data-mood-note`)??``}" \u2014 mood ${t.getAttribute(`data-mood-val`)??``} \u2014 ${t.getAttribute(`data-mood-range`)??``}`)},{signal:h}),ee(),{element:p,destroy(){m.abort()}}}async function Cn(e,t,n,r){let i=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),{name:`PBKDF2`},!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,salt:t,iterations:n,hash:`SHA-256`},i,{name:`AES-GCM`,length:256},!1,r)}async function wn(e,t){let n=crypto.getRandomValues(new Uint8Array(12)),r=await crypto.subtle.encrypt({name:`AES-GCM`,iv:n},t,e),i=new Uint8Array(12+r.byteLength);return i.set(n,0),i.set(new Uint8Array(r),12),i.buffer}async function Tn(e,t){let n=e.slice(0,12),r=e.slice(12);return crypto.subtle.decrypt({name:`AES-GCM`,iv:new Uint8Array(n)},t,r)}var En=new TextEncoder().encode(`freedbt-book-gating-v1`),Dn=1e5;async function On(e){return Cn(e,En,Dn,[`decrypt`])}async function kn(e,t){return Tn(e,t)}async function An(e,t){let n=await fetch(e);if(!n.ok)throw Error(`Failed to fetch chapter: HTTP ${n.status}`);let r=await kn(await n.arrayBuffer(),t);return new Blob([r],{type:`application/pdf`})}function jn(e,t){return`<a href="${e}" target="_blank" rel="noopener" class="book-link" title="${t}"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="2" d="M2 3h6a4 4 0 0 1 4 4v12.5a1.5 1.5 0 0 0-1.5-1.5H2z"/><path stroke-width="2" d="M22 3h-6a4 4 0 0 0-4 4v12.5a1.5 1.5 0 0 1 1.5-1.5h8.5z"/><path stroke-width="1" d="M4 7.5h6M4 10h6M4 12.5h6M4 15h6M14 7.5h6M14 10h6M14 12.5h6M14 15h6"/></svg></a>`}var Mn=`<dialog id="book-password-dialog" class="book-password-dialog">
    <form id="book-password-form" method="dialog">
      <h3>Enter book passphrase</h3>
      <p>
        The book excerpt PDFs are lightly gated. Enter the passphrase you were
        given to unlock them. It will be remembered on this device.
      </p>
      <input
        id="book-password-input"
        type="password"
        autocomplete="off"
        spellcheck="false"
        placeholder="passphrase"
      />
      <div id="book-password-error" class="book-password-error"></div>
      <div class="book-password-actions">
        <button type="button" id="book-password-cancel" class="btn btn-secondary">Cancel</button>
        <button type="submit" id="book-password-submit" class="btn">Unlock</button>
      </div>
    </form>
  </dialog>`;function Nn(){let e=document.querySelector(`#book-password-dialog`);if(e)return e;let t=document.createElement(`div`);t.innerHTML=Mn;let n=t.firstElementChild;return document.body.appendChild(n),e=n,e}function Pn(){let e=window.open(`about:blank`,`_blank`);return e?(e.document.open(),e.document.write(`<title>Decrypting…</title><style>body{font-family:sans-serif;padding:2em;text-align:center;color:#555}</style><p>Decrypting book excerpt…</p>`),e.document.close(),e):null}function Fn(e){setTimeout(()=>URL.revokeObjectURL(e),6e4)}function In(e){return e instanceof DOMException&&e.name===`OperationError`}var Ln=null;function Rn(e){let t=Nn(),n=t.querySelector(`#book-password-form`),r=t.querySelector(`#book-password-input`),i=t.querySelector(`#book-password-error`),a=t.querySelector(`#book-password-cancel`),o=`__freedbtBookDialogWired`,s=t;s[o]||(s[o]=!0,a.addEventListener(`click`,()=>{t.close(`cancel`)}),n.addEventListener(`submit`,e=>{e.preventDefault();let n=Ln;if(!n)return;let a=r.value;if(!a){i.textContent=`Please enter the passphrase.`;return}let o=Pn();i.textContent=`Verifying…`,(async()=>{if(await c(n,a,o,e=>{In(e)?i.textContent=`Wrong passphrase.`:i.textContent=`Error: ${e instanceof Error?e.message:String(e)}`})){try{await z({...R(),bookPassword:a})}catch{}Ln=null,t.close(`ok`)}})()}));let c=async(e,t,n,r)=>{try{let r=await An(e,await On(t)),i=URL.createObjectURL(r);return n?n.location.href=i:window.open(i,`_blank`),Fn(i),!0}catch(e){return n&&n.close(),r(e),!1}},l=e=>{Ln=e,i.textContent=``,r.value=``,t.showModal(),queueMicrotask(()=>r.focus())};e.querySelectorAll(`.book-link`).forEach(e=>{let t=`__freedbtBookLinkWired`,n=e;n[t]||(n[t]=!0,e.addEventListener(`click`,t=>{t.preventDefault();let n=e.getAttribute(`href`);if(!n)return;let r=R().bookPassword;if(r){c(n,r,Pn(),e=>{if(In(e))z({...R(),bookPassword:``}),l(n);else{console.error(`Failed to open book excerpt:`,e);let t=e instanceof Error?e.message:String(e);alert(`Could not load book excerpt:\n${t}`)}});return}l(n)}))})}var zn=[{key:`urges`,columns:[{key:`urge_use`,label:`Use
0-5`,type:`number`,min:0,max:5,group:`Urges`},{key:`urge_suicide`,label:`Suicide
0-5`,type:`number`,min:0,max:5,group:`Urges`},{key:`urge_self_harm`,label:`Self-Harm
0-5`,type:`number`,min:0,max:5,group:`Urges`}],label:`Urges to…`},{key:`emotions`,columns:[{key:`emo_sad`,label:`Sad
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_shame`,label:`Shame
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_anger`,label:`Anger
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_fear`,label:`Fear
0-5`,type:`number`,min:0,max:5,group:`Emotions`},{key:`emo_joy`,label:`Joy
0-5`,type:`number`,min:0,max:5,group:`Emotions`}],label:`Emotions`},{key:`drugs`,columns:[{key:`drug_illicit_count`,label:`Illicit
#`,type:`number`,min:0,max:99,group:`Drugs`},{key:`drug_illicit_specify`,label:`Illicit
Specify`,type:`text`,group:`Drugs`},{key:`drug_alcohol_count`,label:`Alcohol
#`,type:`number`,min:0,max:99,group:`Drugs`},{key:`drug_alcohol_specify`,label:`Alcohol
Specify`,type:`text`,group:`Drugs`},{key:`drug_meds_count`,label:`Meds
#`,type:`number`,min:0,max:99,group:`Drugs`},{key:`drug_meds_specify`,label:`Meds
Specify`,type:`text`,group:`Drugs`}],label:`Drugs`},{key:`actions`,columns:[{key:`act_self_harm`,label:`Self-Harm
0-5`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_lies`,label:`Lies
0-5`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_anger_behaviours`,label:`Anger Behav.`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_isolate`,label:`Isolate`,type:`number`,min:0,max:5,group:`Actions`},{key:`act_avoid`,label:`Avoid`,type:`number`,min:0,max:5,group:`Actions`},{key:`skills_used`,label:`Skills Used`,type:`number`,min:0,max:7,group:`Actions`},{key:`reinforcement`,label:`Reinforcement`,type:`textarea`,rows:1,group:`Actions`}],label:`Actions`}],Bn=[{value:0,abbrev:`!thought,!use`,description:`Not thought about or used`},{value:1,abbrev:`thought,!use,!want`,description:`Thought about, not used, didn't want to`},{value:2,abbrev:`thought,!use,want`,description:`Thought about, not used, wanted to`},{value:3,abbrev:`try,!could`,description:`Tried but couldn't use them`},{value:4,abbrev:`try,could,!help`,description:`Tried, could use them but they didn't help`},{value:5,abbrev:`try,could,help`,description:`Tried, could use them, helped`},{value:6,abbrev:`!try,use,!help`,description:`Didn't try, used them, didn't help`},{value:7,abbrev:`!try,use,help`,description:`Didn't try, used them, helped`}],Vn=[`1. Wise Mind`,`2. Observe: Just
Notice (Urge Surfing)`,`3. Describe: Put
Words On`,`4. Participate: Enter
into the Experience`,`5. Non-Judgmental
Stance`,`6. One-Mindfully:
In-the-Moment`,`7. Effectiveness:
Focus on What Works`,`8. Objective Effectiveness:
DEARMAN`,`9. Relationship Effectiveness:
GIVE`,`10. Self-Respect
Effectiveness: FAST`,`11. Observe and
Describe Emotions`,`12. Check the Facts`,`13. Opposite Action`,`14. Problem-Solving`,`15. ABC PLEASE`,`16. Mindfulness of
Current Emotions`,`17. Pros and Cons`,`18. STOP`,`19. TIPP`,`20. Distract 
(Wise Mind ACCEPTS)`,`21. Self-Soothe`,`22. IMPROVE the Moment`,`23. Radical Acceptance`,`24. Willingness`,`25. Mindfulness of
Current Thoughts`],Hn=[{key:`urge_use`,label:`Urge to Use`},{key:`urge_quit_therapy`,label:`Urge to Quit Therapy`},{key:`urge_self_harm`,label:`Urge to Self-Harm`}],Un=[{key:`belief_control_emotions`,label:`Belief in Control of Emotions`},{key:`belief_control_behaviours`,label:`Belief in Control of Behaviours`},{key:`belief_control_thoughts`,label:`Belief in Control of Thoughts`}];function Wn(e,t){let n=`${s}day_${e}_${t.key}`;if(t.key===`skills_used`){let r=`<option value=""></option>`+Bn.map(e=>`<option value="${e.value}">${e.abbrev}</option>`).join(``);return`<select id="${n}" name="day_${e}_${t.key}" class="diary-cell-select">${r}</select>`}return t.type===`checkbox`?`<input type="checkbox" id="${n}" name="day_${e}_${t.key}" class="form-checkbox">`:t.type===`textarea`?`<textarea id="${n}" name="day_${e}_${t.key}" rows="${t.rows??2}" class="diary-cell-input diary-cell-text"></textarea>`:t.type===`number`?`<input type="number" id="${n}" name="day_${e}_${t.key}" min="${t.min}" max="${t.max}" class="diary-cell-input">`:`<input type="text" id="${n}" name="day_${e}_${t.key}" class="diary-cell-input diary-cell-text">`}function Gn(e){let t=e.columns;return`
    <div class="diary-band">
      <table class="diary-table diary-band-table">
        <thead>
          <tr>${`<th colspan="${1+t.length}" class="group-header">${e.label}</th>`}</tr>
          <tr>${[`<th class="col-header">Day</th>`,...t.map(e=>`<th class="col-header col-header-${e.type}" title="${e.label}">${e.label.replace(/\n/g,`<br>`)}</th>`)].join(``)}</tr>
        </thead>
        <tbody>${h.map(e=>{let n=t.map(t=>`<td class="diary-cell">${Wn(e,t)}</td>`).join(``);return`<tr><td class="day-label">${_[e]}</td>${n}</tr>`}).join(``)}</tbody>
      </table>
    </div>
  `}function Kn(){let e=lt(),t=new Set(e.hide_daily_groups??[]),n=new Set(e.hide_daily_columns??[]),r=new Set(e.hide_before_after??[]),i=e.repurpose_daily_groups??{},a=e.repurpose_daily_columns??{},o=e.repurpose_before_after??{},c=zn.filter(e=>!t.has(e.key)).map(e=>({...e,label:i[e.key]?.new_label??e.label,columns:e.columns.filter(e=>!n.has(e.key)).map(e=>({...e,label:a[e.key]?.new_label??e.label}))})).filter(e=>e.columns.length>0).map(Gn).join(``),l=Bn.map(e=>`<div><dt>${e.value}</dt><dd>${e.description}</dd></div>`).join(`
          `),u=[...Hn,...Un].filter(e=>!r.has(e.key)).map(e=>({...e,label:o[e.key]?.new_label??e.label})),d=u.map(e=>`
      <tr>
        <td class="ba-label">${e.label}</td>
        <td><input type="number" id="${s}${e.key}_before" name="${e.key}_before" min="0" max="5" class="diary-cell-input"></td>
        <td><input type="number" id="${s}${e.key}_after" name="${e.key}_after" min="0" max="5" class="diary-cell-input"></td>
      </tr>
    `).join(``);return`
    <section class="diary-sheet" aria-label="Daily Tracking">
      <h3 class="diary-sheet-title">Daily Tracking</h3>
      <div class="diary-bands">
        ${c}
      </div>

      <div class="diary-notes-row">
        <div class="diary-notes-field">
          <label for="${s}apparently_unimportant_behaviours">
            Apparently Unimportant Behaviours
            <span class="diary-notes-subtitle">(non-obvious sabotage of goals)</span>
          </label>
          ${T(`apparently_unimportant_behaviours`,2)}
        </div>
        <div class="diary-notes-field">
          <label for="${s}keeping_doors_open">Keeping Doors to Use Open</label>
          ${T(`keeping_doors_open`,2)}
        </div>
      </div>

      <div class="diary-events-section">
        <h4>Events to note during the week</h4>
        <div class="diary-events-grid">
          ${h.map(e=>`
            <div class="diary-event-day">
              <label for="${s}event_${e}">${g[e]}</label>
              ${T(`event_`+e,2)}
            </div>
          `).join(``)}
        </div>
      </div>

      ${u.length>0?`<div class="before-after-section">
        <h4>Before / After Therapy Session</h4>
        <table class="before-after-table">
          <thead>
            <tr>
              <th></th>
              <th>Before (0–5)</th>
              <th>After (0–5)</th>
            </tr>
          </thead>
          <tbody>
            ${d}
          </tbody>
        </table>
      </div>`:``}

      <div class="skills-legend">
        <h4>Skills Used Scale</h4>
        <dl class="skills-scale">
          ${l}
        </dl>
      </div>
    </section>
  `}function qn(){return`
    <section class="diary-sheet" aria-label="Skills Diary Card">
      <h3 class="diary-sheet-title">Skills Diary Card</h3>
      <p class="diary-instructions">Instructions: Check the days you worked on each skill</p>
      <div class="diary-table-wrapper">
        <table class="skills-table">
          <thead>
            <tr>
              <th class="skill-name-header">Skill</th>
              ${h.map(e=>`<th class="skill-day-header">${_[e]}</th>`).join(``)}
            </tr>
          </thead>
          <tbody>
            ${Vn.map((e,t)=>{let n=t+1,r=`/freedbt/excerpts/skill_${String(n).padStart(2,`0`)}.pdf.enc`,i=h.map(e=>`<td class="skill-day-cell"><input type="checkbox" id="${s}skill_${n}_${e}" name="skill_${n}_${e}" class="form-checkbox"></td>`).join(``);return`<tr><td class="skill-label">${`${e.replace(/\n/g,`<br>`)} ${jn(r,`Open skill excerpt`)}`}</td>${i}</tr>`}).join(``)}
          </tbody>
        </table>
      </div>
    </section>
  `}var Jn=`
    <div class="mood-records-enable" style="display:none">
      <label class="mood-records-toggle">
        <input type="checkbox" id="dc-mood-records-cb">
        <span class="mood-records-toggle-label">include mood records</span>
      </label>
    </div>
`,Yn=`
    <div class="mood-records-embed" style="display:none">
      <div id="dc-mood-records-list" class="mood-list"></div>
    </div>
`,Xn=`
    <div class="sleep-plot-enable" style="display:none">
      <label class="sleep-plot-toggle">
        <input type="checkbox" id="dc-sleep-plot-cb">
        <span class="sleep-plot-toggle-label">show sleep</span>
      </label>
    </div>
`,Zn=`
    <div class="sleep-plot-embed" style="display:none">
      <div id="dc-sleep-plot-mount"></div>
    </div>
`;function Qn(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">DBT Diary Card</h2>
      <h3 class="worksheet-name">Weekly Tracking</h3>
    </div>

    <div class="form-row form-row-header diary-header-row">
      <label>Initials: <input type="text" id="${s}initials" name="initials" class="form-input form-input-short"></label>
      <label>Date Started: ${D(`date_started`)}</label>
    </div>

    <div class="form-row diary-header-row">
      <fieldset class="inline-radio">
        <legend>How often did you fill out this side?</legend>
        ${de(`fill_frequency`,[{value:`daily`,label:`Daily`},{value:`2-3_times`,label:`2–3 Times`},{value:`once`,label:`Once`}],`inline-radio-group`)}
      </fieldset>
      <fieldset class="inline-radio">
        <legend>Filled out in session?</legend>
        ${de(`filled_in_session`,[{value:`yes`,label:`Yes`},{value:`no`,label:`No`}],`inline-radio-group`)}
      </fieldset>
    </div>

    ${Kn()}
    ${qn()}
    ${Zn}
    ${Yn}
    ${Xn}
    ${Jn}
  `}async function $n(e,t){let n=e.querySelector(`#input_date_started`)?.value||t?.metadata.date,r=null,i=null;n&&(r=new Date(n+`T00:00:00`),i=new Date(r),i.setDate(i.getDate()+8));let a=e.querySelector(`.mood-records-enable`),o=e.querySelector(`.mood-records-embed`);if(a&&o){a.style.display=``,o.style.display=``;let e=a.querySelector(`#dc-mood-records-cb`),t=o.querySelector(`#dc-mood-records-list`);e.disabled=!1;let n=await mt(),s;s=r&&i?n.filter(e=>{if(e.tombstoned_at)return!1;let t=new Date(e.dtrange.from);return t>=r&&t<=i}):n.filter(e=>!e.tombstoned_at),s.sort((e,t)=>we(t.dtrange.from,e.dtrange.from)),e.addEventListener(`change`,()=>{e.checked?nn(t,s,{emptyMessage:`No mood records for this week.`}):t.innerHTML=``})}let s=e.querySelector(`.sleep-plot-enable`),c=e.querySelector(`.sleep-plot-embed`);if(s&&c){let e=await Tt();if(e&&e.length>0){s.style.display=``,c.style.display=``;let t=s.querySelector(`#dc-sleep-plot-cb`),n=c.querySelector(`#dc-sleep-plot-mount`);t.disabled=!1;let a=bn(e),o=null;t.addEventListener(`change`,()=>{t.checked?(o=Sn({showMoodRecords:!1,showDateRangeControl:!1,showRollingAvgControl:!0,defaultRangeDays:7,sleep:a,...r&&i?{startDate:r.getTime(),endDate:i.getTime()}:{}}),n.innerHTML=``,n.appendChild(o.element)):(o&&=(o.destroy(),null),n.innerHTML=``)})}}}var er=[{key:`ex1`,label:`Attended to my breath coming in and out, letting my attention settle into my center.`},{key:`ex2`,label:`Imagined being a flake of stone on the lake.`},{key:`ex3`,label:`Imagined walking down an inner spiral stairs.`},{key:`ex4`,label:`Dropped into the pauses between inhaling and exhaling.`},{key:`ex5`,label:`Breathed "wise" in, "mind" out.`},{key:`ex6`,label:`Asked Wise Mind a question (breathing in) and listened for the answer (breathing out).`},{key:`ex7`,label:`Asked myself, "Is this Wise Mind?"`}],tr=4,nr=2;function rr(){let e=er.map((e,t)=>`<p class="checklist-item">${Array.from({length:tr},(t,n)=>k(`${e.key}_t${n+1}`)).join(` `)} ${t+1}. ${e.label}</p>`).join(``),t=[8,9].map(e=>`<p class="checklist-item">${Array.from({length:tr},(t,n)=>k(`ex${e}_t${n+1}`)).join(` `)} ${e}. Other (describe): ${E(`ex${e}_describe`)}</p>`).join(``),n=Array.from({length:nr},(e,t)=>{let n=t+1;return`
    <fieldset class="worksheet-step">
      <legend>Practice ${n}</legend>
      <div class="form-section">
        <p><strong>Describe the situation and how you practiced Wise Mind:</strong></p>
        ${A(`situation_${n}_description`)}
      </div>
      <div class="form-section">
        <p><strong>How effective was the practice in helping you become centered in your Wise Mind?</strong></p>
        ${pe(`situation_${n}_effectiveness`,1,5,{1:`Not effective`,3:`Somewhat effective`,5:`Very effective`})}
      </div>
    </fieldset>`}).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Mindfulness Worksheet 3</h2>
      <p class="worksheet-ref">(Mindfulness Handouts 3, 3a)</p>
      <h3 class="worksheet-name">Wise Mind Practice</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <fieldset class="worksheet-step">
      <legend>Wise Mind Practice Exercise</legend>
      <p class="worksheet-aside"><em>Check off an exercise each time you do one.</em></p>
      ${e}
      ${t}
    </fieldset>

    ${n}

    <div class="form-section">
      <p><strong>List any and all wise things you did this week:</strong></p>
      ${A(`wise_things_this_week`)}
    </div>
  `}var ir=[{key:`reasonable_emotion`,left:`Reasonable mind`,right:`Emotion mind`},{key:`doing_nothing`,left:`Doing mind`,right:`Nothing-to-do mind`},{key:`change_acceptance`,left:`Intense desire for change of the moment`,right:`Radical acceptance of what is`},{key:`denial_indulgence`,left:`Self-denial`,right:`Self-indulgence`}];function ar(){let e=ir.map(e=>`
      <div class="form-section">
        <div class="form-row" style="justify-content:space-between">
          <span><strong>${e.left}</strong></span>
          <span><strong>${e.right}</strong></span>
        </div>
        ${pe(`dilemma_${e.key}`,1,5,{1:e.left,3:`Balanced`,5:e.right})}
      </div>`).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Mindfulness Worksheet 10a</h2>
      <p class="worksheet-ref">(Mindfulness Handout 10)</p>
      <h3 class="worksheet-name">Analyzing Yourself on the Middle Path</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <fieldset class="worksheet-step">
      <legend>Step 1</legend>
      <p><strong>Figure out where you are off the middle path, toward one extreme or the other.</strong>
      For each of the following Wise Mind dilemmas, select where you think you are most of the time.
      If you are fairly balanced, select the middle. If you are out of balance, select closer to
      the end you are too extreme on.</p>
      ${e}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 2</legend>
      <p><strong>Choose one dilemma.</strong> Describe <em>very specifically</em> what you are doing that is
      too much, and then describe what you do too little of.</p>
      <div class="two-column-box">
        <div class="column-box">
          <h4 class="column-header">Too much</h4>
          ${A(`step2_too_much`)}
        </div>
        <div class="column-box">
          <h4 class="column-header">Too little</h4>
          ${A(`step2_too_little`)}
        </div>
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 3</legend>
      <p><strong>Check the facts.</strong> Check for interpretations and opinions. Make sure that your list
      of activities you do too much of or too little of is in fact accurate. Check your own values
      in Wise Mind: Be sure to work on your middle path, not someone else's. Also check for
      <strong>judgments.</strong> Avoid "good," "bad," and judgmental language. Rewrite any items above
      if needed so that they are <strong>factual and nonjudgmental.</strong></p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 4</legend>
      <p><strong>Decide</strong> on one (or at most two) <em>very specific</em> things to do in the next week
      to get closer to balance.</p>
      <div class="two-column-box">
        <div class="column-box">
          <h4 class="column-header">Do less</h4>
          ${A(`step4_do_less`)}
        </div>
        <div class="column-box">
          <h4 class="column-header">Do more</h4>
          ${A(`step4_do_more`)}
        </div>
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 5</legend>
      ${A(`step5_what_i_did`,{label:`Describe what you did since last week:`})}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Step 6</legend>
      <p><strong>Rate</strong> how effective the practice was in helping you become more balanced
      on the middle path. Rate it from 1 (did not help at all) to 5 (very effective, really helped):</p>
      ${pe(`step6_effectiveness`,1,5,{1:`Did not help at all`,3:`Somewhat helpful`,5:`Very effective`})}
    </fieldset>

    <div class="form-section">
      <p><strong>List any and all wise things you did this week:</strong></p>
      ${A(`wise_things_this_week`)}
    </div>
  `}function or(){let e=(e,t=``)=>E(e,t,!0);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Mindfulness Worksheet 4A</h2>
      <p class="worksheet-ref">(Mindfulness Handouts 4–4c)</p>
      <h3 class="worksheet-name">Observing, Describing, Participating Checklist</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Check off mindfulness skills that you use when you use them. You can check each skill up to four
      times. If you practice a skill more than four times, extend your checks toward the edge of the page.
    </p>

    <fieldset class="worksheet-step">
      <legend>Practice Observing</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`obs_1`)} 1. What you see: ${e(`obs_1_watch`)}Watch without following what you see.</p>
      <p class="checklist-item">${e(`obs_2`)} 2. Sounds: ${e(`obs_2_sounds`)}Sounds around you, ${e(`obs_2_pitch`)}pitch and sound of someone's voice, ${e(`obs_2_music`)}music.</p>
      <p class="checklist-item">${e(`obs_3`)} 3. Smells around you: ${e(`obs_3_food`)}Aroma of food, ${e(`obs_3_soap`)}soap, ${e(`obs_3_air`)}air as you walk.</p>
      <p class="checklist-item">${e(`obs_4`)} 4. The taste of what you eat and the act of eating.</p>
      <p class="checklist-item">${e(`obs_5`)} 5. Urges to do something: ${e(`obs_5_urge_surf`)}Urge-surf, ${e(`obs_5_notice_avoid`)}notice urge to avoid, ${e(`obs_5_notice_body`)}notice where in body urge is.</p>
      <p class="checklist-item">${e(`obs_6`)} 6. Body sensations: ${e(`obs_6_body_scan`)}Body scan, ${e(`obs_6_walking`)}sensation of walking, ${e(`obs_6_touching`)}body touching something.</p>
      <p class="checklist-item">${e(`obs_7`)} 7. Thoughts coming in and out of your mind: ${e(`obs_7_river`)}Imagine your mind as a river, ${e(`obs_7_conveyor`)}as a conveyor belt.</p>
      <p class="checklist-item">${e(`obs_8`)} 8. Your breath: ${e(`obs_8_stomach`)}Movement of stomach, ${e(`obs_8_nose`)}sensations of air in and out nose.</p>
      <p class="checklist-item">${e(`obs_9`)} 9. By expanding awareness: ${e(`obs_9_body`)}To your entire body, ${e(`obs_9_space`)}to space around you, ${e(`obs_9_tree`)}to hugging a tree.</p>
      <p class="checklist-item">${e(`obs_10`)} 10. By opening the mind: ${e(`obs_10_each_sensation`)}To each sensation arising, not attaching, letting go of each.</p>
      <p class="checklist-item">${e(`obs_11`)} 11. Other (describe): ${e(`obs_11_describe`)}</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Describing</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`desc_12`)} 12. What you see outside of your body.</p>
      <p class="checklist-item">${e(`desc_13`)} 13. Thoughts, feelings, and body sensations inside yourself.</p>
      <p class="checklist-item">${e(`desc_14`)} 14. Your breathing.</p>
      <p class="checklist-item">${e(`desc_15`)} 15. Other (describe): ${e(`desc_15_describe`)}</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Participating</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`part_16`)} 16. Dance to music.</p>
      <p class="checklist-item">${e(`part_17`)} 17. Sing along with music you are listening to.</p>
      <p class="checklist-item">${e(`part_18`)} 18. Sing in the shower.</p>
      <p class="checklist-item">${e(`part_19`)} 19. Sing and dance while watching TV.</p>
      <p class="checklist-item">${e(`part_20`)} 20. Jump out of bed and dance or sing before getting dressed.</p>
      <p class="checklist-item">${e(`part_21`)} 21. Go to a church that sings and join in the singing.</p>
      <p class="checklist-item">${e(`part_22`)} 22. Play karaoke with friends or at a karaoke club or bar.</p>
      <p class="checklist-item">${e(`part_23`)} 23. Throw yourself into what another person is saying.</p>
      <p class="checklist-item">${e(`part_24`)} 24. Go running, riding, skating, walking; become one with the activity.</p>
      <p class="checklist-item">${e(`part_25`)} 25. Play a sport and throw yourself into playing.</p>
      <p class="checklist-item">${e(`part_26`)} 26. Become the count of your breath, becoming only \u201cone\u201d when you count 1, becoming only \u201ctwo\u201d when you count 2, and so on.</p>
      <p class="checklist-item">${e(`part_27`)} 27. Become a word as you slowly say the word over and over and over.</p>
      <p class="checklist-item">${e(`part_28`)} 28. Throw caution to the wind, and throw yourself into a social or work activity.</p>
      <p class="checklist-item">${e(`part_29`)} 29. Other (describe): ${e(`part_29_describe`)}</p>
    </fieldset>

    <div class="form-section">
      <p><strong>List any and all wise things you did this week:</strong></p>
      ${A(`wise_things`)}
    </div>
  `}function sr(){let e=(e,t=``)=>E(e,t,!0);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Mindfulness Worksheet 5A</h2>
      <p class="worksheet-ref">(Mindfulness Handouts 5\u20135c)</p>
      <h3 class="worksheet-name">Nonjudgmentalness, One-Mindfulness, Effectiveness Checklist</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <fieldset class="worksheet-step">
      <legend>Practice Nonjudgmentalness</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`nonj_1`)} 1. Say in your mind, \u201cA judgmental thought arose in my mind.\u201d</p>
      <p class="checklist-item">${e(`nonj_2`)} 2. Count judgmental thoughts.</p>
      <p class="checklist-item">${e(`nonj_3`)} 3. Replace judgmental thoughts and statements with nonjudgmental thoughts and statements.</p>
      <p class="checklist-item">${e(`nonj_4`)} 4. Observe your judgmental facial expressions, postures, voice tones.</p>
      <p class="checklist-item">${e(`nonj_5`)} 5. Change judgmental expressions, postures, voice tones.</p>
      <p class="checklist-item">${e(`nonj_6`)} 6. Stay very concrete and describe your day nonjudgmentally.</p>
      <p class="checklist-item">${e(`nonj_7`)} 7. Write out a nonjudgmental description of an event that prompted an emotion.</p>
      <p class="checklist-item">${e(`nonj_8`)} 8. Write out a nonjudgmental blow-by-blow account of a particularly important episode in your day.</p>
      <p class="checklist-item">${e(`nonj_9`)} 9. Imagine a person you are angry with. Imagine understanding that person.</p>
      <p class="checklist-item">${e(`nonj_10`)} 10. When you feel judgmental, practice half-smiling and/or willing hands.</p>

      <div class="form-section" style="margin-top: var(--space-md);">
        <p><strong>Describe the situation and how you practiced nonjudgmentalness:</strong></p>
        ${A(`nonj_describe`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice One-Mindfulness</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`onem_11`)} 11. Awareness while making tea or coffee.</p>
      <p class="checklist-item">${e(`onem_12`)} 12. Awareness while washing the dishes.</p>
      <p class="checklist-item">${e(`onem_13`)} 13. Awareness while hand-washing clothes.</p>
      <p class="checklist-item">${e(`onem_14`)} 14. Awareness while cleaning house.</p>
      <p class="checklist-item">${e(`onem_15`)} 15. Awareness while taking a slow-motion bath.</p>
      <p class="checklist-item">${e(`onem_16`)} 16. Awareness with meditation.</p>

      <div class="form-section" style="margin-top: var(--space-md);">
        <p><strong>Describe the situation and how you practiced one-mindfulness:</strong></p>
        ${A(`onem_describe`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Effectiveness</legend>
      <p class="worksheet-aside">Check off an exercise each time you do one.</p>

      <p class="checklist-item">${e(`eff_17`)} 17. Give up being right.</p>
      <p class="checklist-item">${e(`eff_18`)} 18. Drop willfulness.</p>
      <p class="checklist-item">${e(`eff_19`)} 19. Doing what is effective.</p>

      <div class="form-section" style="margin-top: var(--space-md);">
        <p><strong>Describe the situation and how you practiced effectiveness:</strong></p>
        ${A(`eff_describe`)}
      </div>
    </fieldset>

    <div class="form-section">
      <p><strong>List any and all wise things you did this week:</strong></p>
      ${A(`wise_things`)}
    </div>
  `}function cr(e){let t=`event${e}_`;return`
    <fieldset class="worksheet-step">
      <legend>Crisis Event ${e}</legend>

      <div class="form-row">
        <label><strong>CRISIS EVENT ${e}:</strong></label>
        <label>Rate level of distress (0–100) Before: ${O(`${t}distress_before`,0,100)}</label>
        <label>After: ${O(`${t}distress_after`,0,100)}</label>
      </div>

      <div class="form-section">
        <p><strong>Prompting event for my distress (who, what, when, where):</strong> What triggered the state of crisis?</p>
        ${A(`${t}prompting_event`)}
      </div>

      <div class="form-section">
        <label><strong>Behavior you are trying to stop:</strong> ${E(`${t}behavior_to_stop`)}</label>
      </div>

      <div class="form-section">
        <div class="form-row">
          <div class="form-section">
            <div><label>${k(`${t}stop`)} Stop</label></div>
            <div><label>${k(`${t}step_back`)} Take a step back</label></div>
            <div><label>${k(`${t}observe`)} Observe</label></div>
            <div><label>${k(`${t}proceed_mindfully`)} Proceed mindfully</label></div>
          </div>

          <p><strong>At left, check the steps you used and describe what you did here:</strong></p>
          ${A(`${t}steps_used_description`)}

        </div>
      </div>

      <div class="form-section">
        <p><strong>Describe the outcome of using skills:</strong></p>
        ${A(`${t}outcome`)}
      </div>

      <div class="form-section">
        <p>Circle a number to indicate how effective the skill was in helping you tolerate the distress
           and cope with the situation (keeping you from doing something to make the situation worse).</p>
        ${pe(`${t}effectiveness`,1,5,{1:`I still couldn't stand the situation, even for one more minute.`,3:`I was able to cope somewhat, at least for a little while. It helped somewhat.`,5:`I could use skills, tolerated distress, and resisted problem urges.`})}
      </div>
    </fieldset>
  `}function lr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 2</h2>
      <p class="worksheet-ref">(Distress Tolerance Handout 4)</p>
      <h3 class="worksheet-name">Practicing the STOP Skill</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Describe two crisis situations that happened to you. Then describe your use of the STOP skill.
    </p>

    ${cr(1)}
    ${cr(2)}
  `}var ur=5;function dr(){let e=(e,t)=>Array.from({length:ur},(n,r)=>`${E(`${e}_${t}_${r+1}`)}`).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 3</h2>
      <p class="worksheet-ref">(Distress Tolerance Handout 5)</p>
      <h3 class="worksheet-name">Pros and Cons of Acting on Crisis Urges</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <ol class="worksheet-instructions">
      <li>Describe the <em>problem behavior</em> you are trying to stop:</li>
      <li>List pros and cons for acting on crisis urges (including urges to act and urges to quit),
          and create a separate list for resisting crisis behavior by tolerating distress and using skills.</li>
      <li>Read the pros and cons when an urge toward the problem behavior occurs.</li>
    </ol>

    <div class="form-row">
      <label>Problem behavior: ${E(`problem_behavior`)}</label>
    </div>

    <div class="pros-cons-grid">
      <div class="pros-cons-column">
        <h4>Acting on Crisis Urges</h4>
        <div class="pros-section">
          <strong>PROS</strong>
          ${e(`acting`,`pros`)}
        </div>
        <div class="cons-section">
          <strong>CONS</strong>
          ${e(`acting`,`cons`)}
        </div>
      </div>
      <div class="pros-cons-column">
        <h4>Resisting Crisis Urges</h4>
        <div class="pros-section">
          <strong>PROS</strong>
          ${e(`resisting`,`pros`)}
        </div>
        <div class="cons-section">
          <strong>CONS</strong>
          ${e(`resisting`,`cons`)}
        </div>
      </div>
    </div>

    <p class="worksheet-instructions">
      Identify which pros and cons are short-term (just for today) or long-term (beyond today).
      Then ask your Wise Mind: Would you rather have a good day or a good life?
      Make a mindful choice about your behavior.
    </p>

    <p class="worksheet-aside">
      <em>If this worksheet helps you choose skillful behavior over crisis behavior, be sure to keep it
      where you can find it and review it again when you are in crisis.</em>
    </p>
  `}var fr=[{id:`temperature`,title:`CHANGING MY FACIAL TEMPERATURE`,subtitle:`Used cold water to change emotions`},{id:`exercise`,title:`INTENSE EXERCISE`,subtitle:``},{id:`breathing`,title:`PACED BREATHING`,subtitle:``},{id:`relaxation`,title:`PAIRED MUSCLE RELAXATION`,subtitle:``}];function pr(){let e=fr.map(({id:e,title:t,subtitle:n})=>`
    <fieldset class="worksheet-step">
      <legend>${n?`${t} — ${n}`:t}</legend>

      <div class="form-section">
        <label><strong>Situation:</strong> ${E(`${e}_situation`)}</label>
      </div>

      <div class="form-row">
        <label><strong>Arousal (0–100)</strong> Before: ${O(`${e}_arousal_before`,0,100)}</label>
        <label>After: ${O(`${e}_arousal_after`,0,100)}</label>
      </div>

      <div class="form-row">
        <label><strong>Distress tolerance</strong> (0 = I can't stand it; 100 = I can survive) Before: ${O(`${e}_tolerance_before`,0,100)}</label>
        <label>After: ${O(`${e}_tolerance_after`,0,100)}</label>
      </div>

      <div class="form-section">
        ${A(`${e}_what_i_did`,{label:`What I did:`})}
      </div>
    </fieldset>`).join(`
`);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 4</h2>
      <h3 class="worksheet-name">Changing Body Chemistry with TIP Skills</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Describe the situation you were in when you chose to practice each skill.
      Rate both your emotional arousal and distress tolerance before and after using the TIP skill.
      Describe what you actually did.
    </p>
${e}
  `}function mr(){let e=(e,t)=>`
      <div class="form-row">
        ${A(`${e}_${t}`,{label:`${t}.`})}
        <label>Acceptance (0–5): ${O(`${e}_${t}_rating`,0,5)}</label>
      </div>`;return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 9</h2>
      <p class="worksheet-ref">(Distress Tolerance Handouts 11–11b)</p>
      <h3 class="worksheet-name">Radical Acceptance</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <h4>FIGURE OUT WHAT YOU NEED TO RADICALLY ACCEPT</h4>

    <fieldset class="worksheet-step">
      <legend>1. Very Important Things to Accept</legend>
      <p>Make a list of two <strong>very important</strong> things in your life right now
         that you need to radically accept. Then give each one a number indicating how much
         you accept this part of yourself or your life: from 0 (no acceptance, I am in complete
         denial and/or rebellion) to 5 (complete acceptance, I am at peace with this).
         <em>Note:</em> if you have already completed this section, you don't need to do it
         again unless things have changed.</p>
      ${e(`very_important`,1)}
      ${e(`very_important`,2)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>2. Less Important Things to Accept This Week</legend>
      <p>Make a list of two <strong>less important</strong> things in your life you are having
         trouble accepting this week. Then rate your acceptance just as you did above.</p>
      ${e(`less_important`,1)}
      ${e(`less_important`,2)}
    </fieldset>

    <h4>REFINE YOUR LIST</h4>

    <fieldset class="worksheet-step">
      <legend>3. Check the Facts and Judgments</legend>
      <p>Review your two lists above. <strong>Check the facts.</strong> Check for
         interpretations and opinions. Make sure that what you are trying to accept is in fact
         the case. <strong>Check for judgments.</strong> Avoid "good," "bad," and judgmental
         language. Rewrite any items above if needed so that they are
         <strong>factual and nonjudgmental.</strong></p>
      ${A(`refine_notes`,{label:`Notes on what you refined (optional):`})}
    </fieldset>

    <h4>PRACTICE RADICAL ACCEPTANCE</h4>

    <fieldset class="worksheet-step">
      <legend>4. Choose Items to Practice On</legend>
      <p>Choose one item from the very important list and one item from the less important
         list to practice on.</p>
      <div class="form-row">
        ${A(`practice_item_1`,{label:`1.`})}
      </div>
      <div class="form-row">
        ${A(`practice_item_2`,{label:`2.`})}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>5. Focus &amp; Accept Exercises</legend>
      <p>Focus your mind on each of these facts or events separately, allowing your Wise Mind
         to radically accept that these <em>are</em> facts of your life. Check off any of the
         following exercises that you did.</p>
      <p class="checklist-item">${k(`ex_questioning_fighting`)} Observed that I was questioning or fighting reality.</p>
      <p class="checklist-item">${k(`ex_reality_is`)} Reminded myself that reality is what it is.</p>
      <p class="checklist-item">${k(`ex_causes_exist`)} Considered the causes of the reality, and nonjudgmentally accepted that causes exist.</p>
      <p class="checklist-item">${k(`ex_whole_being`)} Practiced accepting all the way with my whole being (mind, body, spirit).</p>
      <p class="checklist-item">${k(`ex_opposite_action`)} Practiced opposite action.</p>
      <p class="checklist-item">${k(`ex_coped_ahead`)} Coped ahead with events that seemed unacceptable.</p>
      <p class="checklist-item">${k(`ex_body_sensations`)} Attended to my body sensations as I thought about what I need to accept.</p>
      <p class="checklist-item">${k(`ex_disappointment`)} Allowed myself to experience disappointment, sadness, or grief.</p>
      <p class="checklist-item">${k(`ex_life_worth_living`)} Acknowledged that life can be worth living even when there is pain.</p>
      <p class="checklist-item">${k(`ex_pros_cons`)} Did pros and cons of accepting versus denial and rejection.</p>
      <p class="checklist-item">${k(`ex_other`)} Other: ${E(`ex_other_describe`)}</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>6. Overall Acceptance Rating</legend>
      <div class="form-row">
        <label>Rate your degree of acceptance after practicing radical acceptance (0–5):
          ${O(`final_acceptance_rating`,0,5)}</label>
      </div>
    </fieldset>
  `}function hr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 10</h2>
      <p class="worksheet-ref">(Distress Tolerance Handouts 12, 13)</p>
      <h3 class="worksheet-name">Turning the Mind, Willingness, Willfulness</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Practice each skill, and rate your level of acceptance of reality as it is before and
      after: from 0 (no acceptance at all) to 5 (I'm at peace with this). List what you tried
      specifically under the rating.
    </p>

    <fieldset class="worksheet-step">
      <legend>Turning the Mind</legend>

      <div class="form-row">
        <label>Acceptance (0–5) Before: ${O(`tm_acceptance_before`,0,5)}</label>
        <label>After: ${O(`tm_acceptance_after`,0,5)}</label>
      </div>

      <div class="form-section">
        <p><strong>OBSERVE not accepting.</strong> What did you observe? What were you having trouble accepting?</p>
        ${A(`tm_observe`)}
      </div>

      <div class="form-section">
        <p><strong>MAKE AN INNER COMMITMENT</strong> to accept what feels unacceptable. How did you do this?</p>
        ${A(`tm_inner_commitment`)}
      </div>

      <div class="form-section">
        <p>Describe your <strong>PLAN FOR CATCHING YOURSELF</strong> the next time you drift from acceptance.</p>
        ${A(`tm_plan_catching`)}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Willingness</legend>

      <div class="form-row">
        <label>Acceptance (0–5) Before: ${O(`w_acceptance_before`,0,5)}</label>
        <label>After: ${O(`w_acceptance_after`,0,5)}</label>
      </div>
      <div class="form-row">
        <label>Willfulness (0–5) Before: ${O(`w_willfulness_before`,0,5)}</label>
        <label>After: ${O(`w_willfulness_after`,0,5)}</label>
      </div>

      <div class="form-section">
        <p>Describe <strong>EFFECTIVE BEHAVIOR</strong> you did to move forward toward a goal.</p>
        ${A(`w_effective_behavior`)}
      </div>

      <div class="form-section">
        <p><strong>NOTICE WILLFULNESS.</strong> Describe how you are not participating effectively
           in the world as it is, or how you are not doing something you know needs to be done
           to move toward a goal.</p>
        ${A(`w_notice_willfulness`)}
      </div>

      <div class="form-section">
        <p>Describe how you <strong>PRACTICED RADICALLY ACCEPTING YOUR WILLFULNESS.</strong></p>
        ${A(`w_practiced_accepting_willfulness`)}
      </div>

      <div class="form-section">
        <p><strong>MAKE AN INNER COMMITMENT</strong> to accept what feels unacceptable. How did you do this?</p>
        ${A(`w_inner_commitment`)}
      </div>

      <div class="form-section">
        <p>Describe what you did that was <strong>WILLING.</strong></p>
        ${A(`w_willing`)}
      </div>
    </fieldset>
  `}var gr=[{key:`hs_1`,label:`Half-smiled when I first woke up in the morning.`},{key:`hs_2`,label:`Half-smiled during my free moments.`},{key:`hs_3`,label:`Half-smiled with willing hands while I was listening to music.`},{key:`hs_4`,label:`Half-smiled with willing hands when I was irritated.`},{key:`hs_5`,label:`Half-smiled in a lying-down position.`},{key:`hs_6`,label:`Half-smiled in a sitting position.`},{key:`hs_7`,label:`Half-smiled when I was walking down the street.`},{key:`hs_8`,label:`Half-smiled with willing hands when my feelings were hurt.`},{key:`hs_9`,label:`Half-smiled with willing hands when I did not want to accept something.`},{key:`hs_10`,label:`Half-smiled with willing hands when I started getting really angry.`},{key:`hs_11`,label:`Half-smiled when I had negative thoughts.`},{key:`hs_12`,label:`Half-smiled when I couldn't sleep.`},{key:`hs_13`,label:`Half-smiled with another person.`}],_r=3;function vr(){let e=gr.map((e,t)=>`<p class="checklist-item">${k(e.key)} ${t+1}. ${e.label}</p>`).join(``),t=Array.from({length:_r},(e,t)=>{let n=t+1;return`
    <fieldset class="worksheet-step">
      <legend>${n}. Situation</legend>
      <div class="form-section">
        <label><strong>Situation:</strong> ${E(`situation_${n}_description`)}</label>
      </div>
      <div class="form-section">
        <label><strong>Strategies used (or numbers from above):</strong> ${E(`situation_${n}_strategies`)}</label>
      </div>
      <div class="form-section">
        <p><strong>Effectiveness:</strong></p>
        ${pe(`situation_${n}_effectiveness`,1,5,{1:`not effective`,3:`somewhat effective`,5:`very effective`})}
      </div>
    </fieldset>`}).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 11</h2>
      <p class="worksheet-ref">(Distress Tolerance Handout 14, 14a)</p>
      <h3 class="worksheet-name">Half-Smiling and Willing Hands</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Describe your practice with half-smiling and willing hands this past week. Practice each
      day at least once. Practice both when you are not emotionally distressed and when you
      are distressed.
    </p>

    <fieldset class="worksheet-step">
      <legend>Check Off Practices</legend>
      <p class="worksheet-aside"><em>Check off any of the following exercises that you did.</em></p>
      ${e}
      <p class="checklist-item">${k(`hs_14_other`)} 14. Other: ${E(`hs_14_other_describe`)}</p>
    </fieldset>

    <p><strong>Describe practicing half-smiling and willing hands.</strong></p>
    ${t}
  `}function yr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 4A</h2>
      <h3 class="worksheet-name">Observing and Describing Emotions</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Select a current or recent emotional reaction, and fill out as much of this sheet as you can. If the
      prompting event for the emotion you are working on is another emotion that occurred first (e.g., fear
      prompted anger at yourself), then fill out a second worksheet for the first emotion. Use Emotion
      Regulation Handout 6 for ideas.
    </p>

    <div class="form-row">
      <label>EMOTION NAME: ${E(`emotion_name`)}</label>
      <label>INTENSITY (0–100): ${O(`intensity`,0,100)}</label>
    </div>

    <div class="form-section">
      <p><strong>PROMPTING EVENT</strong> for my emotion (who, what, when, where): What set off the emotion?</p>
      ${A(`prompting_event`)}
    </div>

    <div class="form-section">
      <p><strong>VULNERABILITY FACTORS:</strong> What happened before that made me vulnerable to the prompting event?</p>
      ${A(`vulnerability_factors`)}
    </div>

    <div class="form-section">
      <p><strong>INTERPRETATIONS</strong> (beliefs, assumptions, appraisals) of the situation:</p>
      ${A(`interpretations`)}
    </div>

    <div class="form-section">
      <p><strong>FACE and BODY CHANGES and EXPERIENCES:</strong> What was I feeling in my face and body?</p>
      ${A(`face_body_changes`)}
    </div>

    <div class="form-section">
      <p><strong>ACTION URGES:</strong> What did I feel like doing? What did I want to say?</p>
      ${A(`action_urges`)}
    </div>

    <div class="form-section">
      <p><strong>FACE and BODY LANGUAGE:</strong> What was my facial expression? Posture? Gestures?</p>
      ${A(`face_body_language`)}
    </div>

    <div class="form-section">
      <p><strong>What I SAID</strong> in the situation (be specific):</p>
      ${A(`what_i_said`)}
    </div>

    <div class="form-section">
      <p><strong>What I DID</strong> in the situation (be specific):</p>
      ${A(`what_i_did`)}
    </div>

    <div class="form-section">
      <p><strong>What AFTEREFFECTS</strong> did the emotion have on me (my state of mind, other emotions,
         behaviour, thoughts, memory, body, etc.)?</p>
      ${A(`aftereffects`)}
    </div>
  `}function U(e,t,n){return`<p class="checklist-item">${k(t)} ${e}. ${n}</p>`}function W(e){return`<p class="checklist-item">${k(e)} Other: ${E(`${e}_text`,``,!0)}</p>`}function br(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Handout 18</h2>
      <p class="worksheet-ref">(Emotion Regulation Worksheets 10, 12, 13) (p. 1 of 3)</p>
      <h3 class="worksheet-name">Values and Priorities List</h3>
    </div>

    <p class="worksheet-instructions">
      In my own Wise Mind, I believe it is important to:
    </p>

    <fieldset class="worksheet-step">
      <legend>A. Attend to relationships.</legend>
      ${U(1,`val_1`,`Repair old relationships.`)}
      ${U(2,`val_2`,`Reach out for new relationships.`)}
      ${U(3,`val_3`,`Work on current relationships.`)}
      ${U(4,`val_4`,`End destructive relationships.`)}
      ${W(`val_a_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>B. Be part of a group.</legend>
      ${U(5,`val_5`,`Have close and satisfying relationships with others.`)}
      ${U(6,`val_6`,`Feel a sense of belonging.`)}
      ${U(7,`val_7`,`Receive affection and love.`)}
      ${U(8,`val_8`,`Be involved and intimate with others; have and keep close friends.`)}
      ${U(9,`val_9`,`Have a family; stay close to and spend time with family members.`)}
      ${U(10,`val_10`,`Have people to do things with.`)}
      ${W(`val_b_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>C. Be powerful and able to influence others.</legend>
      ${U(11,`val_11`,`Have the authority to approve or disapprove of what people do, or to control how resources are used.`)}
      ${U(12,`val_12`,`Be a leader.`)}
      ${U(13,`val_13`,`Make a great deal of money.`)}
      ${U(14,`val_14`,`Be respected by others.`)}
      ${U(15,`val_15`,`Be seen by others as successful; become well known; obtain recognition and status.`)}
      ${U(16,`val_16`,`Compete successfully with others.`)}
      ${U(17,`val_17`,`Be popular and accepted.`)}
      ${W(`val_c_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>D. Achieve things in life.</legend>
      ${U(18,`val_18`,`Achieve significant goals; be involved in undertakings I believe are significant.`)}
      ${U(19,`val_19`,`Be productive.`)}
      ${U(20,`val_20`,`Work toward goals; work hard.`)}
      ${U(21,`val_21`,`Be ambitious.`)}
      ${W(`val_d_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>E. Live a life of pleasure and satisfaction.</legend>
      ${U(22,`val_22`,`Have a good time.`)}
      ${U(23,`val_23`,`Seek fun and things that give pleasure.`)}
      ${U(24,`val_24`,`Have free time.`)}
      ${U(25,`val_25`,`Enjoy the work I do.`)}
      ${W(`val_e_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>F. Keep life full of exciting events, relationships, and things.</legend>
      ${U(26,`val_26`,`Try new and different things in life.`)}
      ${U(27,`val_27`,`Be daring and seek adventures.`)}
      ${U(28,`val_28`,`Have an exciting life.`)}
      ${W(`val_f_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>G. Behave respectfully.</legend>
      ${U(29,`val_29`,`Be humble and modest; do not draw attention to myself.`)}
      ${U(30,`val_30`,`Follow traditions and customs; behave properly.`)}
      ${U(31,`val_31`,`Do what I am told and follow rules.`)}
      ${U(32,`val_32`,`Treat others well.`)}
      ${W(`val_g_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>H. Be self-directed.</legend>
      ${U(33,`val_33`,`Follow my own path in life.`)}
      ${U(34,`val_34`,`Be innovative, think of new ideas, and be creative.`)}
      ${U(35,`val_35`,`Make my own decisions and be free.`)}
      ${U(36,`val_36`,`Be independent; take care of myself and those I am responsible for.`)}
      ${U(37,`val_37`,`Have freedom of thought and action; be able to act in terms of my own priorities.`)}
      ${W(`val_h_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>I. Be a spiritual person.</legend>
      ${U(38,`val_38`,`Make room in life for spirituality; live life according to spiritual principles.`)}
      ${U(39,`val_39`,`Practice a religion or faith.`)}
      ${U(40,`val_40`,`Grow in understanding of myself, my personal calling, and life’s real purpose.`)}
      ${U(41,`val_41`,`Discern and do the will of God (or a higher power) and find lasting meaning in life.`)}
      ${W(`val_i_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>J. Be secure.</legend>
      ${U(42,`val_42`,`Live in secure and safe surroundings.`)}
      ${U(43,`val_43`,`Be physically healthy and fit.`)}
      ${U(44,`val_44`,`Have a steady income that meets my own and my family’s basic needs.`)}
      ${W(`val_j_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>K. Recognize the universal good of all things.</legend>
      ${U(45,`val_45`,`Be fair, treat people equally, and provide equal opportunities.`)}
      ${U(46,`val_46`,`Understand different people; be open-minded.`)}
      ${U(47,`val_47`,`Care for nature and the environment.`)}
      ${W(`val_k_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>L. Contribute to the larger community.</legend>
      ${U(48,`val_48`,`Help people and those in need; care for others’ well-being; improve society.`)}
      ${U(49,`val_49`,`Be loyal to friends and devoted to close people; be committed to a group that shares my beliefs, values, and ethical principles.`)}
      ${U(50,`val_50`,`Be committed to a cause or to a group that has a larger purpose beyond my own.`)}
      ${U(51,`val_51`,`Make sacrifices for others.`)}
      ${W(`val_l_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>M. Work at self-development.</legend>
      ${U(52,`val_52`,`Develop a personal philosophy of life.`)}
      ${U(53,`val_53`,`Learn and do challenging things that help me grow and mature as a human being.`)}
      ${W(`val_m_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>N. Have integrity.</legend>
      ${U(54,`val_54`,`Be honest, and acknowledge and stand up for my personal beliefs.`)}
      ${U(55,`val_55`,`Be a responsible person; keep my word to others.`)}
      ${U(56,`val_56`,`Be courageous in facing and living life.`)}
      ${U(57,`val_57`,`Be a person who pays debts to others and repairs damage I have caused.`)}
      ${U(58,`val_58`,`Be accepting of myself, others, and life as it is; live without resentment.`)}
      ${W(`val_n_other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>O. Other:</legend>
      <p class="checklist-item">${E(`val_o_1`)}</p>
      <p class="checklist-item">${E(`val_o_2`)}</p>
      <p class="checklist-item">${E(`val_o_3`)}</p>
    </fieldset>
  `}function xr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 9</h2>
      <p class="worksheet-ref">(Emotion Regulation Handouts 14–20) (p. 1 of 2)</p>
      <h3 class="worksheet-name">Accumulate Positive Emotions</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      For each emotion regulation skill, note whether you used it during the week, and describe what you did.
    </p>

    <fieldset class="worksheet-step">
      <legend>A — Accumulate Positive Emotions: Short Term</legend>

      <div class="form-section">
        <p><strong>INCREASED daily pleasant activities:</strong></p>
        ${fe(`short_term_days`)}
        ${A(`short_term_describe`,{label:`Describe:`})}
      </div>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>A — Accumulate Positive Emotions: Long Term; Building a Life Worth Living</legend>

      <div class="form-section">
        <p><strong>VALUES considered in deciding what goals to work on</strong>
        <span class="worksheet-aside">(see Emotion Regulation Handout 18)</span>:</p>
        ${A(`long_term_values`)}
      </div>

      <div class="form-section">
        <p><strong>LONG-TERM GOALS worked on (describe):</strong></p>
        ${A(`long_term_goals`)}
      </div>

      <div class="form-section">
        <p><strong>AVOIDED AVOIDING (describe):</strong></p>
        ${A(`avoided_avoiding`)}
      </div>
    </fieldset>
  `}function Sr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Emotion Regulation Worksheet 11A</h2>
      <p class="worksheet-ref">(Emotion Regulation Handouts 17–18)</p>
      <h3 class="worksheet-name">Getting from Values to Specific Action Steps</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Once you have figured out your values, the next step is to decide on specific things you can do or
      achieve (goals) that will make your life more in line with your values. Once you have goals, you
      can figure out what action steps are necessary to achieve the goal.
    </p>

    <p class="worksheet-aside">
      <strong>Example:</strong> VALUE: Be part of a group.
      Possible GOALS: Reconnect with old friends. Get a more social job. Join a club.
      Pick one GOAL to work on right now: Join a club.
      Figure out a few ACTION STEPS that will move me toward my goal:
      Look for clubs on Facebook. Go to the bookstore and ask about book groups. Join an interactive online game or chat room.
    </p>

    <div class="form-section">
      <p><strong>1.</strong> Pick one of your <strong>VALUES</strong>:</p>
      ${A(`step1_value`)}
    </div>

    <div class="form-section">
      <p><strong>2.</strong> Identify three <strong>GOALS</strong>:</p>
      ${A(`step2_goal_2`)}
      ${A(`step2_goal_1`)}
      ${A(`step2_goal_3`)}
    </div>

    <div class="form-section">
      <p><strong>3.</strong> Choose one <strong>GOAL</strong> to work on right now:</p>
      ${A(`step3_chosen_goal`)}
    </div>

    <div class="form-section">
      <p><strong>4.</strong> Identify <strong>ACTION STEPS</strong> you can take right now to move closer to this GOAL.</p>
      ${A(`step4_action_steps`)}
    </div>

    <div class="form-section">
      <p><strong>5.</strong> Take one <strong>ACTION STEP</strong> now. Describe what you did:</p>
      ${A(`step5_action_taken`)}
    </div>

    <div class="form-section">
      <p>Describe what happened next:</p>
      ${A(`step5_what_happened`)}
    </div>
  `}function Cr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Handout 15A</h2>
      <p class="worksheet-ref">(Distress Tolerance Worksheets 8, 8a, 12) (p. 1 of 2)</p>
      <h3 class="worksheet-name">Practicing Mindfulness of Thoughts</h3>
    </div>

    <fieldset class="worksheet-step">
      <legend>Practice Mindfulness of Thoughts by Observing Them</legend>

      <p class="checklist-item">${k(`obs_1`)} 1. Notice thoughts as they come into your mind. As a thought comes into your mind, say "a thought has entered my mind." Label the thought as a thought, saying, "The thought [describe thought] arose in my mind." Use a gentle voice tone.</p>

      <p class="checklist-item">${k(`obs_2`)} 2. As you notice thoughts in your mind, ask, "Where did the thought come from?" Then watch your mind to see if you can see where it came from.</p>

      <p class="checklist-item">${k(`obs_3`)} 3. Step back from your mind, as if you are on top of a mountain and your mind is just a boulder down below. Gaze at your mind, watching what thoughts come up when you are watching it. Come back into your mind before you stop.</p>

      <p class="checklist-item">${k(`obs_4`)} 4. Close your eyes and scan your body for the first physical sensation that you notice. Then scan your mind for the first thought you notice. Shuttle back and forth between scanning for physical sensations and scanning for thoughts. Another time, replace scanning your body for physical sensations to scanning yourself for any emotional feelings. Then shuttle back and forth between an emotional feeling and a thought.</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Mindfulness of Thoughts by Using Words and Voice Tone</legend>

      <p class="checklist-item">${k(`words_5`)} 5. Verbalize thoughts or beliefs out loud, using a nonjudgmental voice tone, over and over and over:</p>

      <p class="checklist-item checklist-sub-item">${k(`words_5a`)} As fast as you can until the thoughts make no sense.</p>
      <p class="checklist-item checklist-sub-item">${k(`words_5b`)} Very, very slowly (one syllable or word per breath).</p>
      <p class="checklist-item checklist-sub-item">${k(`words_5c`)} In a different voice from yours (high- or low-pitched, like a cartoon character or celebrity).</p>
      <p class="checklist-item checklist-sub-item">${k(`words_5d`)} As a dialogue on a TV comedy show ("You'll never believe what thought went through my mind. I was thinking, 'I'm a jerk.' Can you believe that?").</p>
      <p class="checklist-item checklist-sub-item">${k(`words_5e`)} As songs, sung wholeheartedly and dramatically, in a tune that fits the thoughts.</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Mindfulness of Thoughts with Opposite Action</legend>

      <p class="checklist-item">${k(`opp_6`)} 6. Relax your face and body while imagining accepting your thoughts as only thoughts\u2014sensations of the brain.</p>

      <p class="checklist-item">${k(`opp_7`)} 7. Imagine things you would do if you stopped believing everything you think.</p>

      <p class="checklist-item">${k(`opp_8`)} 8. Rehearse in your mind the things that you would do if you did not view your thoughts as facts.</p>

      <p class="checklist-item">${k(`opp_9`)} 9. Practice loving your thoughts as they go through your mind.</p>
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Practice Mindfulness of Thoughts by Imagining That Your Mind Is:</legend>

      <p class="checklist-item">${k(`img_10`)} 10. A conveyor belt, and that thoughts and feelings are coming down the belt. Put each thought or feeling in a box labeled with the type of thought that it is (e.g., worry thoughts, thoughts about my past, thoughts about my mother, planning what to do thoughts). Just keep observing and sorting thoughts into the labeled boxes.</p>

      <p class="checklist-item">${k(`img_11`)} 11. A river, and that thoughts and feelings are boats going down the river. Imagine sitting on the grass, watching the boats go by. Try not to jump on the boat.</p>

      <p class="checklist-item">${k(`img_12`)} 12. A railroad track, and that thoughts and feelings are train cars going by. Try not to jump on the train.</p>

      <p class="checklist-item">${k(`img_13`)} 13. A leaf that has dropped off a tree into a beautiful creek flowing by you as you sit on the grass. Each time a thought or image comes into your mind, imagine that it is written or pictured on the leaf floating by. Let each leaf go by, watching as it goes out of sight.</p>

      <p class="checklist-item">${k(`img_14`)} 14. The sky, and thoughts have wings and can fly through the sky. Watch as each flies out of sight.</p>

      <p class="checklist-item">${k(`img_15`)} 15. The sky, and thoughts are clouds. Notice each thought-cloud as it drifts by, letting it drift out of your mind.</p>

      <p class="checklist-item">${k(`img_16`)} 16. A white room with two doors. Through one door, thoughts come in; through the other, thoughts go out. Watch each thought with attention and curiosity until it leaves. Let go of judgments. Let go of analyzing thoughts and of figuring out if they fit the facts. As a thought comes into your mind, say, "A thought has entered my mind."</p>
    </fieldset>

    <div class="form-section">
      ${A(`other_1`,{label:`Other:`})}
      ${A(`other_2`,{label:`Other:`})}
      ${A(`other_3`,{label:`Other:`})}
      ${A(`other_4`,{label:`Other:`})}
      ${A(`other_5`,{label:`Other:`})}
    </div>
  `}var wr=[{key:`ex_1`,label:`Used words and voice tone to say a thought over and over; as fast as I could; very, very slowly; in a voice different from mine; as a dialogue on a TV comedy show; or as singing.`},{key:`ex_2`,label:`Relaxed my face and body imagining accepting my thoughts as sensations of my brain.`},{key:`ex_3`,label:`Imagined what I would do if I stopped believing everything I think.`},{key:`ex_4`,label:`Rehearsed in my mind what I would do if I did not view my thoughts as facts.`},{key:`ex_5`,label:`Practiced loving my thoughts as they went through my mind.`},{key:`ex_6`,label:`Refocused my mind on sensations I was avoiding by worrying or catastrophizing.`},{key:`ex_7`,label:`Allowed my thoughts to come and go as I focused on observing my breath coming in and out.`},{key:`ex_8`,label:`Labeled the thought as a thought, saying, “The thought [describe thought] arose in my mind.”`},{key:`ex_9`,label:`Asked, “Where did the thought come from?” and watched my mind to find out.`},{key:`ex_10`,label:`Stepped back from my mind, as if I was on top of a mountain.`},{key:`ex_11`,label:`Shuttled back and forth between scanning for physical sensations and scanning for thoughts.`},{key:`ex_12`,label:`Imagined that in my mind thoughts were coming down a conveyor belt; were boats on a river; were train cars on a railroad track; were written on leaves flowing down a river; had wings and could fly away; were clouds floating in the sky; or were going in and out of the doors of my mind. (Underline the image you used.)`}],Tr=3;function Er(){let e=wr.map((e,t)=>`<p class="checklist-item">${k(e.key)} ${t+1}. ${e.label}</p>`).join(``),t=Array.from({length:Tr},(e,t)=>{let n=t+1;return`
    <fieldset class="worksheet-step">
      <legend>${n}. Thought</legend>
      <div class="form-section">
        ${A(`thought_${n}_description`,{label:`<strong>Thought:</strong>`})}
      </div>
      <div class="form-section">
        ${A(`thought_${n}_strategies`,{label:`<strong>Describe strategies you used or give numbers from above:</strong>`})}
      </div>
      <div class="form-section">
        <p><strong>Circle how effective was this at helping you be more mindful and less reactive:</strong></p>
        ${pe(`thought_${n}_effectiveness`,1,5,{1:`Not effective`,3:`Somewhat effective`,5:`Very effective`})}
      </div>
    </fieldset>`}).join(``);return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Distress Tolerance Worksheet 12</h2>
      <p class="worksheet-ref">(Distress Tolerance Handouts 15, 15a)</p>
      <h3 class="worksheet-name">Mindfulness of Current Thoughts</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Describe your efforts to observe your thoughts in the past week. Practice observing thoughts each
      day at least once. Don't focus just on thoughts that are painful, anxiety-provoking, or full of anger;
      also observe and be mindful of pleasant or neutral thoughts. For each thought, first practice saying,
      "The thought [describe thought] went through my mind." Then practice one or more strategies
      to observe and let go of thoughts.
    </p>

    <fieldset class="worksheet-step">
      <legend>Check off any of the following exercises that you did.</legend>
      ${e}
      <div class="checklist-item labeled-expanding-free-input">
        <label>${k(`ex_13_other`)} 13. Other:</label>
        ${T(`ex_13_other_describe`,1)}
      </div>
    </fieldset>

    <p><strong>Describe thoughts you were mindful of during the week. State just each thought as it went through your mind.</strong></p>
    ${t}
  `}function Dr(e,t){return`<div class="dialectics-row">
    <span class="dialectics-checks">
      ${k(`${e}_c1`)}${k(`${e}_c2`)}${k(`${e}_c3`)}${k(`${e}_c4`)}
    </span>
    <div class="dialectics-content">${t}</div>
    ${O(`${e}_rating`,1,5)}
  </div>`}function Or(e,t){return Dr(e,t)}function G(e,t,n=`Describe:`){return Dr(e,`${t}${A(`${e}_describe`,{label:n,seplabel:n.length>15})}`)}function kr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Worksheet 11A</h2>
      <p class="worksheet-ref">(I.E. Handouts 15, 16)</p>
      <h3 class="worksheet-name">Dialectics Checklist</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      <strong>Everyday dialectical practice:</strong> Check off dialectical practice exercises each time you do one.
      For each skill you practice, give it a rating to indicate how effective that skill was in helping you reach
      your personal and interpersonal goals. Rate from a low of 1 (not at all effective) to a high of 5 (very effective).
    </p>

    <fieldset class="worksheet-step">
      <legend>Looked at both sides</legend>
      <p class="dialectics-rating-header">Rating (1\u20135)</p>

      ${Or(`item_1`,`1. Asked Wise Mind: “What am I missing?”`)}
      ${Or(`item_2`,`2. Looked for the kernel of truth in another person’s side.`)}
      ${G(`item_3`,`3. Stayed away from extremes (such as “always” or “never”), and instead`,`Thought or said:`)}
      ${Dr(`item_4`,`4. Balanced opposites in my life:
        <div class="dialectics-sub-checks">
          <label>${k(`item_4_validated`)} Validated both myself and a person I disagreed with</label>
          <label>${k(`item_4_accepted`)} Accepted reality and tried to change it</label>
          <label>${k(`item_4_stayed`)} Stayed attached and also let go</label>
          <label>${k(`item_4_other`)} Other:</label>
          ${A(`item_4_other_describe`,{label:`Describe:`})}
        </div>`)}
      ${G(`item_5`,`5. Made lemonade out of lemons`)}
      ${G(`item_6`,`6. Embraced confusion`)}
      ${G(`item_7`,`7. Played devil’s advocate by arguing both my side and also the other side`)}
      ${G(`item_8`,`8. Used a metaphor or story to describe my own point of view`)}
      ${Or(`item_9`,`9. Did 3-minute Wise Mind to slow down “doing mind” in my everyday life.`)}
      ${G(`item_10`,`10. Other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Stayed aware of my connection</legend>
      <p class="dialectics-rating-header">Rating (1\u20135)</p>

      ${G(`item_11`,`11. Treated others as I want to be treated`)}
      ${G(`item_12`,`12. Looked for similarities between myself and others`)}
      ${G(`item_13`,`13. Noticed the physical connections between all things`)}
      ${G(`item_14`,`14. Other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Embraced change</legend>
      <p class="dialectics-rating-header">Rating (1\u20135)</p>

      ${G(`item_15`,`15. Practiced radical acceptance of change`)}
      ${G(`item_16`,`16. Purposely made changes in small ways to get used to change`)}
      ${G(`item_17`,`17. Other`)}
    </fieldset>

    <fieldset class="worksheet-step">
      <legend>Remembered that change is transactional</legend>
      <p class="dialectics-rating-header">Rating (1\u20135)</p>

      ${G(`item_18`,`18. Paid attention to my effect on others`)}
      ${G(`item_19`,`19. Paid attention to effect of others on me`)}
      ${G(`item_20`,`20. Practiced letting go of blame`)}
      ${Or(`item_21`,`21. Reminded myself that all things, including all behaviors, are caused.`)}
      ${G(`item_22`,`22. Other`)}
    </fieldset>
  `}function Ar(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Worksheet 12</h2>
      <p class="worksheet-ref">(I.E. Handouts 17, 18)</p>
      <h3 class="worksheet-name">Validating Others</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Fill out this sheet whenever you practice your validation skills and whenever you have an
      opportunity to practice even if you don't (or almost don't) do anything to practice.
    </p>

    <div class="form-section">
      <p><strong>Check off types of validation that you practiced (on purpose) with others:</strong></p>
      <p class="checklist-item">${k(`val_1_paid_attention`)} 1. Paid attention.</p>
      <p class="checklist-item">${k(`val_2_reflected`)} 2. Reflected back what was said or done, remaining open to correction.</p>
      <p class="checklist-item">${k(`val_3_sensitive`)} 3. Was sensitive to what was unsaid.</p>
      <p class="checklist-item">${k(`val_4_expressed`)} 4. Expressed how what was felt, done, or said made sense, given the causes.</p>
      <p class="checklist-item">${k(`val_5_acknowledged`)} 5. Acknowledged and acted on what was valid.</p>
      <p class="checklist-item">${k(`val_6_authentic`)} 6. Acted authentically and as an equal.</p>
    </div>

    <div class="form-section">
      <p><strong>List one invalidating and two validating statements made to others.</strong></p>
      ${A(`statement_1`,{label:`1.`})}
      ${A(`statement_2`,{label:`2.`})}
      ${A(`statement_3`,{label:`3.`})}
    </div>

    <div class="form-section">
      <p><strong>Describe a situation where you were nonjudgmental of someone in the past week.</strong></p>
      ${T(`nonjudgmental_situation`,1)}
    </div>

    <div class="form-section">
      <p><strong>Describe a situation where you used validation in the past week.</strong></p>
      ${T(`validation_situation`,1)}
    </div>

    <div class="form-section">
      ${A(`person_validated`,{label:`Who was the person you validated?`,seplabel:!0})}
      ${A(`what_i_did`,{label:`What exactly did you do or say to validate the person?`,seplabel:!0})}
      ${A(`outcome`,{label:`What was the outcome?`,seplabel:!0})}
      ${A(`feel_afterward`,{label:`How did you feel afterward?`,seplabel:!0})}
      ${A(`do_differently`,{label:`Would you say or do something differently next time? If so, what?`,seplabel:!0})}
    </div>
  `}function jr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Worksheet 13</h2>
      <h3 class="worksheet-name">Self-Validation and Self-Respect</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Fill out this sheet whenever you practice your self-validation skills and whenever you have
      an opportunity to practice even if you don't (or almost don't) do anything to practice.
    </p>

    <div class="form-section">
      <p><strong>List one self-invalidating and two self-validating statements you made.</strong></p>
      ${A(`statement_1`,{label:`1.`})}
      ${A(`statement_2`,{label:`2.`})}
      ${A(`statement_3`,{label:`3.`})}
    </div>

    <div class="form-section">
      <p><strong>Describe a situation where you felt invalidated in the past week:</strong></p>
      ${T(`invalidated_situation`,1)}
    </div>

    <div class="form-section">
      <p><strong>Check each strategy you used during the week:</strong></p>
      <p class="checklist-item">${k(`strat_checked_facts`)} Checked <em>all</em> the facts to see if my responses are valid or invalid.</p>
      <p class="checklist-item">${k(`strat_checked_out`)} Checked it out with someone I could trust to validate the valid.</p>
      <p class="checklist-item">${k(`strat_acknowledged_invalid`)} Acknowledged when my responses didn't make sense and were not valid.</p>
      <p class="checklist-item">${k(`strat_worked_to_change`)} Worked to change invalid thinking, comments, or actions. (Stopped blaming.)</p>
      <p class="checklist-item">${k(`strat_dropped_judgmental`)} Dropped judgmental self-statements. (Practiced opposite action.)</p>
      <p class="checklist-item">${k(`strat_reminded_caused`)} Reminded myself that all behavior is caused and that I am doing my best.</p>
      <p class="checklist-item">${k(`strat_compassionate`)} Was compassionate toward myself. Practiced self-soothing.</p>
      <p class="checklist-item">${k(`strat_admitted_hurts`)} Admitted that it hurts to be invalidated by others, even if they are right.</p>
      <p class="checklist-item">${k(`strat_acknowledged_valid`)} Acknowledged when my reactions make sense and are valid in a situation.</p>
      <p class="checklist-item">${k(`strat_remembered_not_catastrophe`)} Remembered that being invalidated, even when my response is actually valid, is rarely a complete catastrophe.</p>
      <p class="checklist-item">${k(`strat_described_grieved`)} Described my experiences and actions in a supportive environment. Grieved traumatic invalidation in my life and the harm it has created.</p>
      <p class="checklist-item">${k(`strat_radical_acceptance`)} Practiced radical acceptance of the invalidating person(s) in my life.</p>
    </div>

    <div class="form-section">
      ${A(`outcome`,{label:`What was the outcome?`})}
    </div>
  `}function Mr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Worksheet 14</h2>
      <h3 class="worksheet-name">Changing Behavior with Reinforcement</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Fill out this sheet whenever you try to increase your own or someone else's behavior with
      reinforcement. Look for opportunities (since they occur all the time) to reinforce behavior.
    </p>

    <div class="form-section">
      <p><strong>1. In advance, identify the behavior you want to increase and the reinforcer you will use.</strong></p>
      <p><strong>a. For yourself:</strong></p>
      ${A(`q1_self_behavior`,{label:`Behavior to increase:`})}
      ${A(`q1_self_reinforcer`,{label:`Reinforcer:`})}
      <p><strong>b. For someone else:</strong></p>
      ${A(`q1_other_behavior`,{label:`Behavior to increase:`})}
      ${A(`q1_other_reinforcer`,{label:`Reinforcer:`})}
    </div>

    <div class="form-section">
      <p><strong>2. Describe the situation(s) where you used reinforcement.</strong></p>
      ${A(`q2_self`,{label:`a. For yourself:`})}
      ${A(`q2_other`,{label:`b. For someone else:`})}
    </div>

    <div class="form-section">
      <p><strong>3. What was the outcome? What did you observe?</strong></p>
      ${A(`q3_self`,{label:`a. For yourself:`})}
      ${A(`q3_other`,{label:`b. For someone else:`})}
    </div>

    <div class="form-section">
      ${A(`q4_feel`,{label:`4. How did you feel afterward?`,seplabel:!0})}
    </div>

    <div class="form-section">
      ${A(`q5_differently`,{label:`5. Would you say or do something differently next time? If so, what?`,seplabel:!0})}
    </div>
  `}function K(e,t,n){return`<div class="mindfulness-pair">
    ${de(`item_${e}`,[{value:`a`,label:`<strong>${e}a.</strong> ${t}`},{value:`b`,label:`<strong>${e}B.</strong> ${n}`}],`stacked-radio-group`,`stacked-radio-item`)}
  </div>`}function Nr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Handout 12A</h2>
      <h3 class="worksheet-name">Identifying Mindfulness of Others</h3>
    </div>

    <p class="worksheet-instructions">
      For each A and B pair, check the more effective response.
    </p>

    <div class="form-section">
      ${K(1,`Multi-task and expect the other person to understand.`,`Give your complete attention to the person you are with.`)}
      ${K(2,`Figure that if you already know someone, you don’t really have to pay such close attention to them any more.`,`Recognize that closeness is built by attending to and learning more and more about people you care about.`)}
      ${K(3,`“My feelings are really hurt by what you did, and the thought went through my mind that you hate me. I know that you don’t really, but did you feel that way at the time?”`,`“I know you hate me. There is no other reason for what you did to me. Don’t tell me differently, either.”`)}
      ${K(4,`In social situations, throw yourself into interactions.`,`Stay reserved and watch social interactions so you don’t make mistakes.`)}
      ${K(5,`Find people with your values.`,`Do little immoral things so as not to be a drag on friendships.`)}
      ${K(6,`Be open to people’s changing their minds about things, as well as their beliefs or feelings.`,`Assume that when people change, they are not trustworthy.`)}
      ${K(7,`Evaluate other people’s behaviors and thoughts, and tell them that they are wrong or that they should be different when you feel sure you are right.`,`If you do not approve of or agree with what another person is doing or thinking, try to understand how it would make sense if you knew the causes.`)}
      ${K(8,`“You should stop doing that.”`,`“I wish you would stop doing that.”`)}
      ${K(9,`“You are lazy and have given up.”`,`“I worry that you have given up.”`)}
      ${K(10,`“I don’t think that is correct.”`,`“How could you possibly think that?”`)}
      ${K(11,`Stay in control so that relationships turn out the way you want.`,`Go with the flow much of the time when in social interactions with groups of friends.`)}
      ${K(12,`Hold back in a conversation until you are sure you like the person.`,`Throw yourself into a conversation until you are sure you don’t like it.`)}
    </div>
  `}function Pr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Worksheet 3</h2>
      <h3 class="worksheet-name">Clarifying Priorities in Interpersonal Situations</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Use this sheet to figure out your goals and priorities in any situation that creates a problem for you.
      Examples include situations where (1) your rights or wishes are not being respected; (2) you want
      someone to do or change something or give you something; (3) you want or need to say no or resist
      pressure to do something; (4) you want to get your position or point of view taken seriously; (5)
      there with another person; or (6) you want to improve your relationship with someone.
    </p>

    <p>Observe and describe in writing as close in time to the situation as possible.</p>

    <div class="form-section">
      <p><strong>Prompting event for my problem:</strong> Who did what to whom? What led up to what?
         What is it about this situation that is a problem for me? Remember to <strong>check the facts!</strong></p>
      ${T(`prompting_event`)}
    </div>

    <div class="form-section">
      <p><strong>My wants and desires in this situation:</strong></p>
      ${A(`objectives`,{label:`<strong>Objectives:</strong> What <strong>specific results</strong> do I want? What do I want this person to do, stop or accept?`,seplabel:!0})}
      ${A(`relationship`,{label:`<strong>Relationship:</strong> How do I want the other person to feel and think about me <strong>because of how I handle the interaction</strong> (whether or not I get what I want from the other person)?`,seplabel:!0})}
      ${A(`self_respect`,{label:`<strong>Self-Respect:</strong> How do I want to feel or think about myself <strong>because of how I handle the interaction</strong> (whether or not I get what I want from the other person)?`,seplabel:!0})}
    </div>

    <div class="form-section">
      <p><strong>My priorities in this situation:</strong> Rate priorities 1 (most important),
         2 (second most important), or 3 (least important).</p>
      <div class="form-row">
        <label>${O(`priority_objectives`,1,3)} Objectives</label>
        <label>${O(`priority_relationship`,1,3)} Relationship</label>
        <label>${O(`priority_self_respect`,1,3)} Self-respect</label>
      </div>
    </div>

    <div class="form-section">
      ${A(`imbalances`,{label:`<strong>Imbalances and conflicts in priorities</strong> that make it hard to be effective in this situation:`,seplabel:!0})}
    </div>
  `}function Fr(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Worksheet 4</h2>
      <p class="worksheet-ref">(Interpersonal Effectiveness Handouts 5, 6, 7)</p>
      <h3 class="worksheet-name">Writing Out Interpersonal Effectiveness Scripts</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Fill out this sheet before you practice your DEAR MAN, GIVE FAST interpersonal skills. Practice
      saying your "lines" out loud, and also in your mind. Use the "cope ahead" skills
      (Emotion Regulation Handout 19).
    </p>

    ${A(`prompting_event`,{label:`<strong>PROMPTING EVENT for my problem:</strong> Who did what to whom? What led up to what?`,seplabel:!0})}

    ${A(`objectives`,{label:`OBJECTIVES IN SITUATION (What results I want):`,seplabel:!0})}

    ${A(`relationship`,{label:`RELATIONSHIP ISSUE (How I want the other person to feel about me):`,seplabel:!0})}

    ${A(`self_respect`,{label:`SELF-RESPECT ISSUE (How I want to feel about myself):`,seplabel:!0})}

    <fieldset class="worksheet-step">
      <legend>Script Ideas for DEAR MAN, GIVE FAST</legend>

      ${A(`step1_describe`,{label:`1. <strong>Describe</strong> situation.`,seplabel:!0})}

      ${A(`step2_express`,{label:`2. <strong>Express</strong> feelings/opinions.`,seplabel:!0})}

      ${A(`step3_assert`,{label:`3. <strong>Assert</strong> request (or say no) directly (star the part you will use later in "broken record" to stay <strong>Mindful</strong> if you need it).`,seplabel:!0})}

      ${A(`step4_reinforcing`,{label:`4. <strong>Reinforcing</strong> comments to make.`,seplabel:!0})}

      ${A(`step5_mindful_appearing`,{label:`5. <strong>Mindful</strong> and <strong>Appearing</strong> confident comments to make (if needed).`,seplabel:!0})}

      ${A(`step6_negotiating`,{label:`6. <strong>Negotiating</strong> comments to make, plus turn-the-table comments (if needed).`,seplabel:!0})}

      ${A(`step7_validating`,{label:`7. <strong>Validating</strong> comments.`,seplabel:!0})}

      ${A(`step8_easy_manner`,{label:`8. <strong>Easy manner</strong> comments.`,seplabel:!0})}
    </fieldset>

    ${A(`avoid`,{label:`<strong>Write on another page, all the things you want to <em>avoid</em> doing or saying.</strong>`,seplabel:!0})}
  `}function q(e,t){return`<div class="form-row">
    ${k(`${e}_did`)}
    ${A(e,{label:t,seplabel:!1})}
  </div>`}function Ir(){return`
    <div class="worksheet-header">
      <h2 class="worksheet-title">Interpersonal Effectiveness Worksheet 5</h2>
      <p class="worksheet-ref">(Interpersonal Effectiveness Handouts 5, 6, 7)</p>
      <h3 class="worksheet-name">Tracking Interpersonal Effectiveness Skills Use</h3>
    </div>

    <div class="form-row form-row-header">
      <label>Due Date: ${D(`due_date`)}</label>
      <label>Name: ${E(`name`)}</label>
      <label>Week Starting: ${D(`week_starting`)}</label>
    </div>

    <p class="worksheet-instructions">
      Fill out this sheet whenever you practice your interpersonal skills and whenever you have an
      opportunity to practice, even if you don't (or almost don't) do anything to practice.
    </p>

    ${A(`prompting_event`,{label:`<strong>PROMPTING EVENT for my problem:</strong> Who did what to whom? What led up to what?`,seplabel:!0})}

    ${A(`objectives`,{label:`OBJECTIVES IN SITUATION (What results I want):`,seplabel:!0})}

    ${A(`relationship`,{label:`RELATIONSHIP ISSUE (How I want the other person to feel about me):`,seplabel:!0})}

    ${A(`self_respect`,{label:`SELF-RESPECT ISSUE (How I want to feel about myself):`,seplabel:!0})}

    <div class="form-section">
      <p><strong>My PRIORITIES in this situation:</strong> Rate priorities 1 (most important),
         2 (second most important), or 3 (least important).</p>
      <div class="form-row">
        <label>${O(`priority_objectives`,1,3)} OBJECTIVES</label>
        <label>${O(`priority_relationship`,1,3)} RELATIONSHIP</label>
        <label>${O(`priority_self_respect`,1,3)} SELF-RESPECT</label>
      </div>
    </div>

    ${A(`imbalances`,{label:`<strong>Imbalances and CONFLICTS IN PRIORITIES</strong> that made it hard to be effective in this situation:`,seplabel:!0})}

    <fieldset class="worksheet-step">
      <legend>What I SAID OR DID in the situation</legend>
      <p class="worksheet-aside">Describe and check below.</p>

      <p><strong>DEAR MAN</strong> (Getting what I want):</p>
      ${q(`dm_described`,`Described situation?`)}
      ${q(`dm_expressed`,`Expressed feelings/opinions?`)}
      ${q(`dm_asserted`,`Asserted?`)}
      ${q(`dm_reinforced`,`Reinforced?`)}
      ${q(`dm_mindful`,`Mindful?`)}
      ${q(`dm_broken_record`,`Broken record?`)}
      ${q(`dm_ignored_attacks`,`Ignored attacks?`)}
      ${q(`dm_appeared_confident`,`Appeared confident?`)}
      ${q(`dm_negotiated`,`Negotiated?`)}

      <p><strong>GIVE</strong> (Keeping the relationship):</p>
      ${q(`give_gentle`,`Gentle?`)}
      ${q(`give_no_threats`,`No threats?`)}
      ${q(`give_no_attacks`,`No attacks?`)}
      ${q(`give_no_judgments`,`No judgments?`)}
      ${q(`give_interested`,`Interested?`)}
      ${q(`give_validated`,`Validated?`)}
      ${q(`give_easy_manner`,`Easy manner?`)}

      <p><strong>FAST</strong> (Keeping my respect for myself):</p>
      ${q(`fast_fair`,`Fair?`)}
      ${q(`fast_no_apologies`,`(No) Apologies?`)}
      ${q(`fast_stuck_to_values`,`Stuck to values?`)}
      ${q(`fast_truthful`,`Truthful?`)}

      ${A(`how_effective`,{label:`<strong>How effective was the interaction?</strong>`,seplabel:!0})}
    </fieldset>
  `}var Lr=[{id:`ch0`,title:`Welcome to DBT Skills Group`,bookPdfPath:`excerpts/ch0.pdf.enc`,forms:[{id:`diary_card`,title:`Diary Card`,subtitle:`Weekly tracking`,pageRef:``,buildFormHtml:Qn,afterViewRender:$n}]},{id:`ch1`,title:`Session 1: Mindfulness`,bookPdfPath:`excerpts/ch1.pdf.enc`,forms:[{id:`mf_ws3`,title:`Wise Mind Practice`,subtitle:`Mindfulness Worksheet 3`,pageRef:`p. 29`,buildFormHtml:rr},{id:`mf_ws10a`,title:`Analyzing Yourself on the Middle Path`,subtitle:`Mindfulness Worksheet 10a`,pageRef:`p. 32`,buildFormHtml:ar}]},{id:`ch2`,title:`Session 2: Emotion Regulation`,bookPdfPath:`excerpts/ch2.pdf.enc`,forms:[{id:`er_ws4a`,title:`Observing and Describing Emotions`,subtitle:`Emotion Regulation Worksheet 4A`,pageRef:`p. 42`,buildFormHtml:yr},{id:`er_h18`,title:`Values and Priorities List`,subtitle:`Emotion Regulation Handout 18`,pageRef:`pp. 46–48`,buildFormHtml:br},{id:`er_ws9_accum`,title:`Accumulate Positive Emotions`,subtitle:`Emotion Regulation Worksheet 9 (p. 1 of 2)`,pageRef:`p. 49`,buildFormHtml:xr},{id:`er_ws11a`,title:`Getting from Values to Specific Action Steps`,subtitle:`Emotion Regulation Worksheet 11A`,pageRef:`p. 50`,buildFormHtml:Sr}]},{id:`ch3`,title:`Session 3: Emotion Regulation`,bookPdfPath:`excerpts/ch3.pdf.enc`,forms:[{id:`er_ws9`,title:`Steps for Reducing Vulnerability to Emotion Mind`,subtitle:`Emotion Regulation Worksheet 9`,pageRef:`pp. 49, 64`,buildFormHtml:ye}]},{id:`ch4`,title:`Session 4: Emotion Regulation`,bookPdfPath:`excerpts/ch4.pdf.enc`,forms:[{id:`er_ws5`,title:`Check the Facts`,subtitle:`Emotion Regulation Worksheet 5`,pageRef:`pp. 72–73`,buildFormHtml:me},{id:`er_ws7`,title:`Opposite Action to Change Emotions`,subtitle:`Emotion Regulation Worksheet 7`,pageRef:`p. 74`,buildFormHtml:he},{id:`er_ws8`,title:`Problem Solving to Change Emotions`,subtitle:`Emotion Regulation Worksheet 8`,pageRef:`pp. 75–76`,buildFormHtml:ve}]},{id:`ch5`,title:`Session 5: Mindfulness`,bookPdfPath:`excerpts/ch5.pdf.enc`,forms:[{id:`mf_ws4a`,title:`Observing, Describing, Participating Checklist`,subtitle:`Mindfulness Worksheet 4A`,pageRef:`p. 92`,buildFormHtml:or},{id:`mf_ws5a`,title:`Nonjudgmentalness, One-Mindfulness, Effectiveness Checklist`,subtitle:`Mindfulness Worksheet 5A`,pageRef:`p. 93`,buildFormHtml:sr}]},{id:`ch6`,title:`Session 6: Distress Tolerance`,bookPdfPath:`excerpts/ch6.pdf.enc`,forms:[{id:`dt_ws2`,title:`Practicing the STOP Skill`,subtitle:`Distress Tolerance Worksheet 2`,pageRef:`p. 107`,buildFormHtml:lr},{id:`dt_ws3`,title:`Pros and Cons of Acting on Crisis Urges`,subtitle:`Distress Tolerance Worksheet 3`,pageRef:`p. 108`,buildFormHtml:dr},{id:`dt_ws4`,title:`Changing Body Chemistry with TIP Skills`,subtitle:`Distress Tolerance Worksheet 4`,pageRef:`p. 109`,buildFormHtml:pr}]},{id:`ch7`,title:`Session 7: Distress Tolerance`,bookPdfPath:`excerpts/ch7.pdf.enc`,forms:[{id:`dt_ws9`,title:`Radical Acceptance`,subtitle:`Distress Tolerance Worksheet 9`,pageRef:`p. 125`,buildFormHtml:mr},{id:`dt_ws10`,title:`Turning the Mind, Willingness, Willfulness`,subtitle:`Distress Tolerance Worksheet 10`,pageRef:`p. 128`,buildFormHtml:hr},{id:`dt_ws11`,title:`Half-Smiling and Willing Hands`,subtitle:`Distress Tolerance Worksheet 11`,pageRef:`p. 129`,buildFormHtml:vr}]},{id:`ch8`,title:`Session 8: Mindfulness`,bookPdfPath:`excerpts/ch8.pdf.enc`,forms:[{id:`dt_h15a`,title:`Practicing Mindfulness of Thoughts`,subtitle:`Distress Tolerance Handout 15A`,pageRef:`pp. 133–134`,buildFormHtml:Cr},{id:`dt_ws12`,title:`Mindfulness of Current Thoughts`,subtitle:`Distress Tolerance Worksheet 12`,pageRef:`p. 135`,buildFormHtml:Er}]},{id:`ch9`,title:`Session 9: Dialectics`,bookPdfPath:`excerpts/ch9.pdf.enc`,forms:[{id:`ie_ws11a`,title:`Dialectics Checklist`,subtitle:`Interpersonal Effectiveness Worksheet 11A`,pageRef:`p. 142`,buildFormHtml:kr}]},{id:`ch10`,title:`Session 10: Dialectics`,bookPdfPath:`excerpts/ch10.pdf.enc`,forms:[{id:`ie_ws12`,title:`Validating Others`,subtitle:`Interpersonal Effectiveness Worksheet 12`,pageRef:`p. 150`,buildFormHtml:Ar},{id:`ie_ws13`,title:`Self-Validation and Self-Respect`,subtitle:`Interpersonal Effectiveness Worksheet 13`,pageRef:`p. 151`,buildFormHtml:jr},{id:`ie_ws14`,title:`Changing Behavior with Reinforcement`,subtitle:`Interpersonal Effectiveness Worksheet 14`,pageRef:`p. 154`,buildFormHtml:Mr}]},{id:`ch11`,title:`Session 11: Interpersonal Effectiveness`,bookPdfPath:`excerpts/ch11.pdf.enc`,forms:[{id:`ie_h12a`,title:`Identifying Mindfulness of Others`,subtitle:`Interpersonal Effectiveness Handout 12A`,pageRef:`p. 163`,buildFormHtml:Nr},{id:`ie_ws3`,title:`Clarifying Priorities in Interpersonal Situations`,subtitle:`Interpersonal Effectiveness Worksheet 3`,pageRef:`p. 164`,buildFormHtml:Pr}]},{id:`ch12`,title:`Session 12: Interpersonal Effectiveness`,bookPdfPath:`excerpts/ch12.pdf.enc`,forms:[{id:`ie_ws4`,title:`Writing Out Interpersonal Effectiveness Scripts`,subtitle:`Interpersonal Effectiveness Worksheet 4`,pageRef:`p. 175`,buildFormHtml:Fr},{id:`ie_ws5`,title:`Tracking Interpersonal Effectiveness Skills Use`,subtitle:`Interpersonal Effectiveness Worksheet 5`,pageRef:`p. 176`,buildFormHtml:Ir}]},{id:`ch13`,title:`Supplemental Reading`,bookPdfPath:`excerpts/ch13.pdf.enc`,forms:[]}];function Rr(){return Lr}function zr(e){for(let t of Lr){let n=t.forms.find(t=>t.id===e);if(n)return n}}function Br(e){return Lr.find(t=>t.forms.some(t=>t.id===e))}function Vr(e){let t=document.createElement(`div`);t.className=`notes-list`;let n=[...e],r=new Set,i=new Map,a=new Map,o=new Map;for(let e of n)i.set(e.id,{title:e.title,body:e.body});function s(e){return new Date(e.edited_at??e.created_at).getTime()}function c(){kt(n.filter(e=>!r.has(e.id))).catch(e=>{console.error(`Failed to save notes:`,e)})}function l(e){let t=n.find(t=>t.id===e);if(!t)return;let a=i.get(e);a&&a.title===t.title&&a.body===t.body||(r.has(e)?r.delete(e):t.edited_at=j(),i.set(e,{title:t.title,body:t.body}),c())}function u(e){let t=a.get(e);t&&clearTimeout(t),a.set(e,setTimeout(()=>{a.delete(e),l(e)},750))}function d(e){if(!r.has(e))return;let t=n.find(t=>t.id===e);if(!t||t.title!==``||t.body!==``)return;r.delete(e);let i=n.findIndex(t=>t.id===e);i>=0&&n.splice(i,1);let s=o.get(e);s&&(s.remove(),o.delete(e));let c=a.get(e);c&&(clearTimeout(c),a.delete(e))}function f(e){let t=n.find(t=>t.id===e);t&&(r.has(e)&&t.title===``&&t.body===``||u(e))}function p(e){let t=document.createElement(`div`);t.className=e.collapsed?`note-item note-collapsed`:`note-item`,t.dataset.noteId=e.id;let s=document.createElement(`div`);s.className=`note-title-row`;let l=document.createElement(`span`);l.className=`section-disclosure`,l.textContent=`▾`;let u=document.createElement(`input`);u.type=`text`,u.className=`note-title`,u.placeholder=`Title`,u.value=e.title;let p=document.createElement(`button`);p.type=`button`,p.className=`note-delete-btn btn btn-small btn-danger`,p.textContent=`delete`,s.appendChild(l),s.appendChild(u),s.appendChild(p);let m=document.createElement(`textarea`);return m.className=`note-body form-textarea form-textarea-auto`,m.rows=2,m.value=e.body,t.appendChild(s),t.appendChild(m),s.addEventListener(`click`,n=>{let r=n.target;r===u||r===p||(t.classList.toggle(`note-collapsed`),e.collapsed=t.classList.contains(`note-collapsed`)||void 0,c())}),u.addEventListener(`input`,()=>{e.title=u.value,f(e.id)}),m.addEventListener(`input`,()=>{e.body=m.value,f(e.id)}),t.addEventListener(`focusout`,()=>{setTimeout(()=>{t.contains(document.activeElement)||d(e.id)},0)}),p.addEventListener(`click`,s=>{if(s.stopPropagation(),r.has(e.id)){r.delete(e.id);let i=n.findIndex(t=>t.id===e.id);i>=0&&n.splice(i,1),t.remove(),o.delete(e.id);let s=a.get(e.id);s&&(clearTimeout(s),a.delete(e.id));return}confirm(`Delete this note?`)&&(e.tombstoned_at=j(),i.set(e.id,{title:e.title,body:e.body}),c(),t.remove(),o.delete(e.id))}),t}function m(){t.innerHTML=``,o.clear();let e=n.filter(e=>!e.tombstoned_at);e.sort((e,t)=>s(t)-s(e));for(let n of e){let e=p(n);o.set(n.id,e),t.appendChild(e)}}function h(){let e=crypto.randomUUID(),i={id:e,title:``,body:``,created_at:j()};n.unshift(i),r.add(e);let a=p(i);o.set(e,a),t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.querySelector(`.note-title`)?.focus()}function g(){let e=[...a.keys()];for(let e of a.values())clearTimeout(e);a.clear();for(let t of e)l(t);t.innerHTML=``,o.clear()}return m(),{element:t,addNew:h,destroy:g}}var Hr=18,Ur=80,Wr=16,Gr=`help-widget-styles`,Kr=`
.help-widget { vertical-align: middle; }
.help-widget-btn {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; border: none;
  background: #3b82f6; color: #fff; cursor: pointer;
  font: bold 11px/1 -apple-system, Helvetica, Arial, sans-serif;
  padding: 0; vertical-align: middle;
}
.help-widget-btn:hover { background: #2563eb; }
.help-widget-popover {
  position: fixed;
  z-index: 300;
  box-sizing: border-box;
  overflow-y: auto;
  background: #fff; border: 1px solid #ccc; border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,.15);
  padding: 10px 12px;
  font: 13px/1.5 -apple-system, Helvetica, Arial, sans-serif;
  color: #333;
}
.help-widget-close {
  float: right; margin: -4px -4px 0 8px;
  border: none; background: none; cursor: pointer;
  font: bold 16px/1 sans-serif; color: #888;
  padding: 2px 4px; border-radius: 3px;
}
.help-widget-close:hover { color: #333; background: #eee; }
.help-widget-body { white-space: pre-wrap; }
`;function qr(){if(document.getElementById(Gr))return;let e=document.createElement(`style`);e.id=Gr,e.textContent=Kr,document.head.appendChild(e)}function Jr(e,t=Hr,n=Ur){qr();let r=document.createElement(`span`);r.className=`help-widget`,r.style.display=`inline-block`;let i=document.createElement(`button`);i.className=`help-widget-btn`,i.type=`button`,i.textContent=`?`,i.setAttribute(`aria-label`,`Help`),i.style.width=`${t}px`,i.style.height=`${t}px`,i.style.fontSize=`${Math.round(t*.6)}px`,i.style.lineHeight=`${t}px`;let a=document.createElement(`div`);a.className=`help-widget-popover`,a.hidden=!0;let o=document.createElement(`button`);o.className=`help-widget-close`,o.type=`button`,o.textContent=`×`,o.setAttribute(`aria-label`,`Close`);let s=document.createElement(`div`);s.className=`help-widget-body`,s.textContent=e,a.appendChild(o),a.appendChild(s),r.appendChild(i),r.appendChild(a);function c(){a.hidden=!1;let e=window.innerWidth,t=window.innerHeight,r=Math.round(e*n/100),i=t-2*Wr;a.style.width=`${r}px`,a.style.maxHeight=`${i}px`;let o=Math.min(a.offsetHeight,i);a.style.left=`${Math.round((e-r)/2)}px`,a.style.top=`${Math.round((t-o)/2)}px`}function l(){a.hidden=!0}return i.addEventListener(`click`,e=>{e.stopPropagation(),a.hidden?c():l()}),o.addEventListener(`click`,e=>{e.stopPropagation(),l()}),a.addEventListener(`keydown`,e=>{e.key===`Escape`&&(l(),i.focus())}),r.addEventListener(`keydown`,e=>{e.key===`Escape`&&!a.hidden&&(l(),i.focus())}),document.addEventListener(`click`,e=>{!a.hidden&&!r.contains(e.target)&&l()}),r}var Yr=22,Xr=-3,Zr=10,Qr=15,$r=5,ei=600,ti=[8,3],ni=`# Alpha/testing status

There will be rough spots still; lmk if you find any.

# PRIVACY

## Local/offline only

This is what's called an offline-first web app, which is kinda confusing because you access it in your web browser, where practically everything you do is very online.

There's no server (no computer other than your devices) that the app communicates with by default, but there are two related servers:

(1) The github.io server that provide's the app's code. That's all it does. "radiatormouthwash" is just one of my weirder google account names (first two things I spotted in my room) that I use to login to GitHub, which is the service that practically all Free and Open Source software projects use to distribute their code.

(2) If you want to use the app from more than one device, since there's no server controlled by me, I have to use a different service for syncing. Any google account, including a random new one (how "radiatormouthwash" came about) will do. You'll be prompted for a passphrase that's used to encrypt your data before sending it to google; you'll have to re-enter the passphrase on other devices after signing in with the same google account.

## Encryption at rest

If you're using a recentish Android, iPhone, Windows 11, or MacOS device, all the data on your device is probably already encrypted by your biometrics or login password (if you have a password).

# Features

Saved and synced fillable worksheets, simple notes, mood records. Print to PDF for diary card works well enough to send to your therapist.

Mobile friendly (with some rough spots still probably).

Book chapter/skill excerpts. Password shared in group chat.

# New features

IF YOU REQUEST A FEATURE I'LL PROBABLY ADD IT, or at least explain why it's harder than it seems.

Some things I was on the fence about prioritizing, and will promote if requested:
- There's a hidden Diary Card customization feature. Will unhide in the near future.
- App has a "plot sleep & mood" feature, but currently only supports fitness watch sleep tracking for me.
    - I can easily add a convenient calendar UI for entering sleep hours per night manually.
    - With some work, probably involving putting the app on app stores, I could add support for android fitness watches generally. Not sure about apple fitness watches.
- Extra password-based encryption-at-rest for older devices and peeps not using a device login password or biometrics (tisk tisk).
`;function ri(e){try{return new Date(e+`T00:00:00`).toLocaleDateString(void 0,{weekday:`short`,year:`numeric`,month:`short`,day:`numeric`})}catch{return e}}function ii(e){let t=zr(e.metadata.form_id)?.title??e.metadata.form_id,n=e.metadata.completed?`status-complete`:`status-draft`,r=e.metadata.completed?`Complete`:`Draft`,{form_id:i,date:a,index:s}=e.metadata,c=o({view:`edit`,formId:i,date:a,index:s}),l=o({view:`readonly`,formId:i,date:a,index:s}),u=s>=2?` <strong class="fill-index-badge">#${s}</strong>`:``;return`
    <div class="fill-item" data-form-id="${i}" data-date="${a}" data-index="${s}">
      <div class="fill-info">
        <span class="fill-title">${t}</span>
        <span class="fill-date">${ri(a)}${u}</span>
        <span class="fill-status ${n}">${r}</span>
      </div>
      <div class="fill-actions">
        <a href="${c}" class="btn btn-small">Edit</a>
        <a href="${l}" class="btn btn-small btn-secondary">View</a>
        <button class="btn btn-small btn-danger delete-fill-btn" data-form-id="${i}" data-date="${a}" data-index="${s}">Delete</button>
      </div>
    </div>
  `}function ai(e,t,n,r){if(e.length===0){t.innerHTML=`<p class="empty-state">No saved fills yet. Choose a form below to get started.</p>`;return}let i=n.hideCompleted?e.filter(e=>!e.metadata.completed):e;if(i.length===0){t.innerHTML=`<p class="empty-state">All fills are completed. Uncheck "Hide completed" to see them.</p>`;return}let a=[...i].sort((e,t)=>t.metadata[n.sortBy].localeCompare(e.metadata[n.sortBy])),o;if(n.groupByChapter){let e=Rr(),t=new Map,n=[];for(let e of a){let r=Br(e.metadata.form_id);r?(t.has(r.id)||t.set(r.id,{title:r.title,fills:[]}),t.get(r.id).fills.push(e)):n.push(e)}let r=[];for(let n of e){let e=t.get(n.id);e&&e.fills.length>0&&r.push(`
          <div class="fills-chapter-group">
            <h4 class="fills-chapter-title">${e.title}</h4>
            ${e.fills.map(ii).join(``)}
          </div>
        `)}n.length>0&&r.push(`
        <div class="fills-chapter-group">
          <h4 class="fills-chapter-title">Other</h4>
          ${n.map(ii).join(``)}
        </div>
      `),o=r.join(``)}else o=a.map(ii).join(``);t.innerHTML=o,t.querySelectorAll(`.delete-fill-btn`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.currentTarget,n=t.dataset.formId,i=t.dataset.date;await r(n,i,parseInt(t.dataset.index,10))})})}async function oi(e){let t=e;t.__homeCleanup&&=(t.__homeCleanup(),void 0);let n=Rr(),r=await Xe(),a=I(),s=Ne(),c=M(),l=await L(),u=await Ot(),{fillsSortBy:d,fillsGroupByChapter:f,fillsHideCompleted:p}=l,m=!1;a===`fsa`&&(m=await F()!==null);let h=await Tt(),g=h!==null&&h.length>0,_=(await mt()).some(e=>!e.tombstoned_at),v=g||_,y=g&&_?`plot sleep & mood`:g?`plot sleep`:`plot mood`,b=n.map(e=>{let t=e.forms.map(e=>`
            <a href="${o({view:`new`,formId:e.id})}" class="form-card">
              <h3 class="form-card-title">${e.title}</h3>
              <p class="form-card-subtitle">${e.subtitle} <span class="form-card-ref">${e.pageRef}</span></p>
            </a>
          `).join(``),n=`/freedbt/${e.bookPdfPath}`;return`
        <div class="session-group">
          <h3 class="session-group-title">
            ${e.title}
            ${jn(n,`Open chapter PDF`)}
          </h3>
          <div class="form-cards">${t}</div>
        </div>
      `}).join(``),x=s&&!m&&!c.fsaDeclined?`<div class="fsa-banner">
           <p>For best results, choose a folder to save your data as files on disk.</p>
           <div class="fsa-banner-actions">
             <button id="fsa-pick-btn" class="btn">Choose Folder</button>
             <label class="fsa-banner-decline"><input type="checkbox" id="fsa-decline-checkbox"> Don't use</label>
           </div>
         </div>`:``,S=`<span class="backend-indicator" title="Storage backend">
    ${a===`fsa`&&m?`📁 File System`:`💾 Browser Storage`}
  </span>`,C=[{value:`updated_at`,label:`Modified`},{value:`created_at`,label:`Created`}].map(e=>`<option value="${e.value}"${e.value===d?` selected`:``}>${e.label}</option>`).join(``);e.innerHTML=`
    <div class="home-view">
      <header class="app-header">
        <h1 class="app-title">DBT <span class="app-version">v0.12.0</span></h1>
        <div class="header-actions">
          ${S}
          <a href="${o({view:`settings`})}" class="btn btn-secondary">Settings</a>
        </div>
      </header>

      ${x}

      <section class="tracking-section">
        <h2 class="section-title section-title-collapsible" data-section="tracking">
          <span class="section-disclosure">▾</span>
          Tracking
        </h2>
        <div class="section-body">
          <div class="tracking-actions">
            <div class="mood-records-group">
              <span class="mood-records-group-label">Mood records</span>
              <button id="track-mood-btn" class="btn btn-secondary">new</button>
              <button id="toggle-mood-list-btn" class="btn btn-secondary">list</button>
            </div>
            ${v?`<button id="toggle-sleep-mood-btn" class="btn btn-secondary">${y}</button>`:``}
          </div>
          <div id="mood-record-list" class="mood-list" style="display:none"></div>
          ${v?`<div id="sleep-mood-plot-container" style="display:none"></div>`:``}
        </div>
      </section>

      <dialog id="mood-record-dialog" class="mood-record-dialog">
        <div id="mood-record-mount"></div>
      </dialog>

      <section class="fills-section">
        <h2 class="section-title section-title-collapsible" data-section="fills">
          <span class="section-disclosure">▾</span>
          Saved Fills
        </h2>
        <div class="section-body">
          <div class="fills-controls">
            <select id="fills-sort" class="fills-sort">${C}</select>
            <label class="fills-group-toggle">
              <input type="checkbox" id="fills-hide-completed"${p?` checked`:``}> Hide completed
            </label>
            <label class="fills-group-toggle">
              <input type="checkbox" id="fills-group-by-chapter"${f?` checked`:``}> By chapter
            </label>
          </div>
          <div class="fills-list"></div>
        </div>
      </section>

      <section class="notes-section">
        <h2 class="section-title section-title-collapsible" data-section="notes">
          <span class="section-disclosure">▾</span>
          Notes
          <button id="new-note-btn" class="btn btn-small">new</button>
        </h2>
        <div class="section-body">
          <div class="notes-list-mount"></div>
        </div>
      </section>

      <section class="forms-section">
        <h2 class="section-title section-title-collapsible" data-section="newFill">
          <span class="section-disclosure">▾</span>
          New Fill
        </h2>
        <div class="section-body">
          ${b}
        </div>
      </section>
    </div>
  `;let ee=e.querySelector(`.app-header .app-title`),w=Jr(ni,Yr);w.style.position=`relative`,w.style.top=`${Xr}px`,w.style.marginLeft=`${Zr}px`,ee.appendChild(w);let te=e.querySelector(`.fills-list`),ne=async(t,n,r)=>{let i=r>=2?` (#${r})`:``;confirm(`Delete this ${zr(t)?.title??t} fill from ${n}${i}?`)&&(await Je(t,n,r),await oi(e))},re=()=>ai(r,te,{groupByChapter:f,sortBy:d,hideCompleted:p},ne);re();let ie=e.querySelector(`#fills-sort`);ie.addEventListener(`change`,async()=>{d=ie.value,await z({...l,fillsSortBy:d}),re()});let ae=e.querySelector(`#fills-hide-completed`);ae.addEventListener(`change`,async()=>{p=ae.checked,await z({...l,fillsHideCompleted:p}),re()});let oe=e.querySelector(`#fills-group-by-chapter`);oe.addEventListener(`change`,async()=>{f=oe.checked,await z({...l,fillsGroupByChapter:f}),re()});let se=(e,t)=>{l.homeCollapsed[t]&&e.classList.add(`section-collapsed`);let n=e.querySelector(`.section-title-collapsible`);n&&n.addEventListener(`click`,async n=>{if(n.target.closest(`button`))return;e.classList.toggle(`section-collapsed`);let r=e.classList.contains(`section-collapsed`),i={...l.homeCollapsed,[t]:r};l.homeCollapsed=i,await z({...l,homeCollapsed:i})})};se(e.querySelector(`.tracking-section`),`tracking`),se(e.querySelector(`.fills-section`),`fills`),se(e.querySelector(`.notes-section`),`notes`),se(e.querySelector(`.forms-section`),`newFill`);let ce=e.querySelector(`.notes-list-mount`),le=Vr(u);ce.appendChild(le.element),t.__homeCleanup=()=>le.destroy(),e.querySelector(`#new-note-btn`).addEventListener(`click`,t=>{t.stopPropagation();let n=e.querySelector(`.notes-section`);if(n.classList.contains(`section-collapsed`)){n.classList.remove(`section-collapsed`);let e={...l.homeCollapsed,notes:!1};l.homeCollapsed=e,z({...l,homeCollapsed:e})}le.addNew()});let ue=e.querySelector(`#fsa-pick-btn`);ue&&ue.addEventListener(`click`,async()=>{try{await ze(),await oi(e)}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;throw e}});let T=e.querySelector(`#fsa-decline-checkbox`);T&&T.addEventListener(`change`,async()=>{if(T.checked){let t=M();t.fsaDeclined=!0,t.persistenceBackend=`indexeddb`,Me(t),await oi(e)}});let E=e.querySelector(`#mood-record-dialog`),D=e.querySelector(`#mood-record-mount`),O=e.querySelector(`#track-mood-btn`),k=null,de=!1;O.addEventListener(`click`,async()=>{D.innerHTML=``;let e;try{let t=(await mt()).filter(e=>!e.tombstoned_at);if(t.length>0){let n=t.reduce((e,t)=>we(t.dtrange.from,e.dtrange.from)>0?t:e);e=new Date(n.dtrange.to)}}catch{}let t=tn({mood_opt:{btwPoints:l.moodHalfPoints,modal:l.moodRanges},time_opt:{initDatetime:new Date,initBackMinutes:Qr,minuteResolution:$r,hour24:!1,hourGridDims:ti,vertHours:!0,stackThresholdPx:ei},lastRecordEnd:e,onAdd:async e=>{let t={note:e.note,mood:e.mood,dtrange:{from:j(e.dtrange.from),to:j(e.dtrange.to)},recorded_at:j()};try{await gt(t),E.close(),de&&await pe()}catch(e){alert(`Failed to save mood record: ${e instanceof Error?e.message:e}`)}},onCancel:()=>{E.close()}});D.appendChild(t.element),k=t,E.showModal()}),E.addEventListener(`close`,()=>{k&&=(k.destroy(),null),D.innerHTML=``});let fe=e.querySelector(`#toggle-mood-list-btn`),A=e.querySelector(`#mood-record-list`);if(fe.addEventListener(`click`,async()=>{de=!de,fe.textContent=de?`hide list`:`list`,de?await pe():A.style.display=`none`}),v){let t=g?bn(h):[],n=e.querySelector(`#toggle-sleep-mood-btn`),r=e.querySelector(`#sleep-mood-plot-container`),i=null,a=!1;n.addEventListener(`click`,async()=>{a=!a,n.textContent=a?`hide plot`:y,a?(i=Sn({showMoodRecords:!0,sleep:t,moods:(await mt()).filter(e=>!e.tombstoned_at)}),r.innerHTML=``,r.appendChild(i.element),r.style.display=``):(i&&=(i.destroy(),null),r.style.display=`none`)})}async function pe(){let e=[...(await mt()).filter(e=>!e.tombstoned_at)].sort((e,t)=>we(t.dtrange.from,e.dtrange.from));nn(A,e);let t=A.querySelectorAll(`.mood-rec-preview`);e.forEach((e,n)=>{let r=t[n];if(!r)return;let i=document.createElement(`button`);i.className=`mood-rec-btn`,i.textContent=`edit`,i.addEventListener(`click`,()=>me(e));let a=document.createElement(`button`);a.className=`mood-rec-btn mood-rec-btn-del`,a.textContent=`delete`,a.addEventListener(`click`,async()=>{if(!confirm(`Delete this mood record?`))return;let t=await mt(),n=t.find(t=>t.recorded_at===e.recorded_at);n&&(n.tombstoned_at=j()),await ht(t),await pe()}),r.appendChild(i),r.appendChild(a)}),A.style.display=``}function me(e){D.innerHTML=``;let t=new Date(e.dtrange.to),n=new Date(e.dtrange.from),r=Math.max(1,Math.round((t.getTime()-n.getTime())/6e4)),i=tn({mood_opt:{btwPoints:l.moodHalfPoints,modal:l.moodRanges,initialMood:e.mood??void 0},time_opt:{initDatetime:t,initBackMinutes:r,minuteResolution:$r,hour24:!1,hourGridDims:ti,vertHours:!0,stackThresholdPx:ei},initialNote:e.note||void 0,onAdd:async t=>{let n={note:t.note,mood:t.mood,dtrange:{from:j(t.dtrange.from),to:j(t.dtrange.to)},recorded_at:e.recorded_at,edited_at:j()};try{let t=await mt(),r=t.findIndex(t=>t.recorded_at===e.recorded_at);r>=0?t[r]=n:t.push(n),await ht(t),E.close(),de&&await pe()}catch(e){alert(`Failed to save mood record: ${e instanceof Error?e.message:e}`)}},onCancel:()=>E.close()});D.appendChild(i.element),k=i,E.showModal()}e.querySelectorAll(`.form-card`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault();let t=e.currentTarget.getAttribute(`href`);t&&i(t)})}),Rn(e)}function si(){return j().split(`T`)[0]}function ci(){return j()}function li(e){let t={},n=e.querySelectorAll(`[id^="${s}"]`);for(let e of n){let n=e.id.slice(s.length);e instanceof HTMLInputElement?e.type===`checkbox`?t[n]=e.checked?`true`:`false`:e.type===`radio`?e.checked&&(t[e.name]=e.value):t[n]=e.value:t[n]=e.value}return t}function ui(e,t){for(let[n,r]of Object.entries(t)){let t=e.querySelectorAll(`input[type="radio"][name="${n}"]`);if(t.length>0){for(let e of t)e.checked=e.value===r;continue}let i=e.querySelector(`#${s}${n}`);i&&(i instanceof HTMLInputElement&&i.type===`checkbox`?i.checked=r===`true`:i.value=r)}}function di(e){let t=e.querySelectorAll(`input, textarea, select`);for(let e of t)e.disabled=!0}var fi=null;async function pi(e,t){fi&&fi.abort(),fi=null;let n=zr(t.formId);if(!n){e.innerHTML=`
      <div class="error-view">
        <h2>Form not found</h2>
        <p>Unknown form ID: <code>${t.formId}</code></p>
        <a href="${o({view:`home`})}" class="btn">Back to Home</a>
      </div>
    `;return}let r=t.date===void 0,i=t.date??si(),a=r?await Ze(t.formId,i):t.index??1,s=r?null:await qe(t.formId,i,a),c=s?.metadata??{form_id:t.formId,date:i,index:a,completed:!1,created_at:ci(),updated_at:ci()};await ct();let l=t.readonly?`View`:s?`Edit`:`New`,u=c.completed?`Complete`:`Draft`;if(e.innerHTML=`
    <div class="editor-view">
      <header class="editor-header">
        <div class="editor-header-left">
          <a href="${o({view:`home`})}" class="btn btn-secondary btn-back">← Back</a>
          <div class="editor-title-area">
            <h2>${n.title}</h2>
            <span class="editor-meta">${l} · ${i} · <span class="fill-status status-${c.completed?`complete`:`draft`}">${u}</span></span>
          </div>
        </div>
        ${t.readonly?`<div class="editor-actions">
                 <a href="${o({view:`edit`,formId:t.formId,date:i,index:a})}" class="btn">Edit</a>
               </div>`:`<div class="editor-actions">
                 <button id="save-draft-btn" class="btn btn-secondary">Save Draft</button>
                 <button id="mark-complete-btn" class="btn">${c.completed?`Mark Incomplete`:`Mark Complete`}</button>
               </div>`}
      </header>

      <div class="editor-form-body" id="form-body">
        ${n.buildFormHtml()}
      </div>

      ${t.readonly?``:`<footer class="editor-footer">
               <button id="save-draft-btn-bottom" class="btn btn-secondary">Save Draft</button>
               <button id="mark-complete-btn-bottom" class="btn">${c.completed?`Mark Incomplete`:`Mark Complete`}</button>
             </footer>`}

      <div id="save-toast" class="save-toast hidden" role="status" aria-live="polite"></div>
    </div>
  `,n.pageRef){let t=e.querySelector(`.worksheet-title`);if(t){let e=document.createElement(`span`);e.className=`worksheet-title-ref`,e.textContent=` ${n.pageRef}`,t.appendChild(e)}}s&&ui(e,s.data);let d=await L();if(Rn(e),t.readonly){if(di(e),n.afterViewRender){let t=e.querySelector(`#form-body`);await n.afterViewRender(t,s)}return}let f=t=>{let n=e.querySelector(`#save-toast`);n.textContent=t,n.classList.remove(`hidden`),setTimeout(()=>n.classList.add(`hidden`),2e3)},p=async t=>{let n=li(e),r=s?{...s.data,...n}:n,i={metadata:{...c,completed:t===null?c.completed:t,updated_at:ci()},data:r};try{await Ge(i),t!==null&&t!==c.completed&&(c.completed=t,e.querySelectorAll(`.fill-status`).forEach(e=>{e.className=t?`fill-status status-complete`:`fill-status status-draft`,e.textContent=t?`Complete`:`Draft`}),e.querySelectorAll(`#mark-complete-btn, #mark-complete-btn-bottom`).forEach(e=>{e.textContent=t?`Mark Incomplete`:`Mark Complete`})),f(t===!0?`Saved and marked complete!`:t===!1?`Saved and marked incomplete.`:`Draft saved!`)}catch(e){f(`Save failed: ${e instanceof Error?e.message:`Unknown error`}`)}};if(e.querySelectorAll(`#save-draft-btn, #save-draft-btn-bottom`).forEach(e=>e.addEventListener(`click`,()=>p(null))),e.querySelectorAll(`#mark-complete-btn, #mark-complete-btn-bottom`).forEach(e=>e.addEventListener(`click`,()=>p(!c.completed))),fi=new AbortController,document.addEventListener(`keydown`,t=>{t.key===`s`&&(t.ctrlKey||t.metaKey)&&e.querySelector(`.editor-view`)&&(t.preventDefault(),p(!1))},{signal:fi.signal}),d.autosaveEnabled){let t=e.querySelector(`#form-body`),n=null;t.addEventListener(`input`,()=>{n&&clearTimeout(n),n=setTimeout(async()=>{let t=li(e),n=s?{...s.data,...t}:t,r={metadata:{...c,updated_at:ci()},data:n};try{await Ge(r)}catch{}},3e3)})}}var J=null,mi=0,hi=null,gi=null;function _i(){localStorage.setItem(l,JSON.stringify({accessToken:J,expiresAt:mi,email:hi}))}function vi(){let e=localStorage.getItem(l);if(e)try{let t=JSON.parse(e);J=t.accessToken,mi=t.expiresAt,hi=t.email}catch{localStorage.removeItem(l)}}function yi(){localStorage.removeItem(l)}vi();function bi(){return typeof google<`u`&&!!google.accounts?.oauth2}function xi(){if(!bi())throw Error(`Google Identity Services library not loaded`);gi=google.accounts.oauth2.initTokenClient({client_id:v,scope:`${x} email`,callback:()=>{}})}function Si(){return new Promise((e,t)=>{if(!gi){t(Error(`Token client not initialized. Call initTokenClient() first.`));return}gi.callback=async n=>{if(n.error){t(Error(`OAuth error: ${n.error}`));return}J=n.access_token;let r=(parseInt(n.expires_in,10)||3600)*1e3;mi=Date.now()+r;try{let e=await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`,{headers:{Authorization:`Bearer ${J}`}});e.ok&&(hi=(await e.json()).email??null)}catch{}_i(),e(J)},gi.error_callback=e=>{t(Error(`OAuth error: ${e.message??`unknown`}`))},gi.requestAccessToken()})}function Ci(){return J?Date.now()>=mi?(J=null,null):J:null}function wi(){return Ci()!==null}function Ti(){return hi}function Ei(){J&&bi()&&google.accounts.oauth2.revoke(J,()=>{}),J=null,mi=0,hi=null,yi()}function Di(){let e=Ci();if(!e)throw Error(`Not signed in to Google`);return e}async function Oi(){let e=Di(),t=[],n;do{let r=new URLSearchParams({spaces:`appDataFolder`,fields:`nextPageToken,files(id,name,modifiedTime)`,pageSize:`100`});n&&r.set(`pageToken`,n);let i=await fetch(`${y}/files?${r}`,{headers:{Authorization:`Bearer ${e}`}});if(!i.ok)throw Error(`Drive list failed: ${i.status} ${await i.text()}`);let a=await i.json();for(let e of a.files??[])t.push({id:e.id,name:e.name,modifiedTime:e.modifiedTime});n=a.nextPageToken}while(n);return t}async function ki(e){let t=Di(),n=await fetch(`${y}/files/${e}?alt=media`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw Error(`Drive read failed: ${n.status} ${await n.text()}`);return n.text()}async function Ai(e,t,n=`application/octet-stream`,r){let i=Di(),a={name:e,parents:[`appDataFolder`]};r&&(a.modifiedTime=r);let o=`---freedbt_boundary`,s=`--${o}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(a)}\r\n--${o}\r\nContent-Type: ${n}\r\n\r\n${t}\r\n--${o}--`,c=await fetch(`${b}/files?uploadType=multipart&fields=id`,{method:`POST`,headers:{Authorization:`Bearer ${i}`,"Content-Type":`multipart/related; boundary=${o}`},body:s});if(!c.ok)throw Error(`Drive create failed: ${c.status} ${await c.text()}`);return(await c.json()).id}async function ji(e,t,n=`application/octet-stream`,r){let i=Di(),a={};r&&(a.modifiedTime=r);let o=`---freedbt_boundary`,s=`--${o}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(a)}\r\n--${o}\r\nContent-Type: ${n}\r\n\r\n${t}\r\n--${o}--`,c=await fetch(`${b}/files/${e}?uploadType=multipart`,{method:`PATCH`,headers:{Authorization:`Bearer ${i}`,"Content-Type":`multipart/related; boundary=${o}`},body:s});if(!c.ok)throw Error(`Drive update failed: ${c.status} ${await c.text()}`)}async function Mi(e){let t=Di(),n=await fetch(`${y}/files/${e}`,{method:`DELETE`,headers:{Authorization:`Bearer ${t}`}});if(!n.ok&&n.status!==404)throw Error(`Drive delete failed: ${n.status} ${await n.text()}`)}function Ni(e){let t=new Uint8Array(e),n=``;for(let e=0;e<t.byteLength;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function Pi(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n.buffer}var Fi=!1,Y=null;function Ii(){return Fi}function Li(){return Fi&&Y!==null}function Ri(){return Y}var zi=null;function Bi(e){zi=e}function Vi(){if(!zi)throw Error(`Prompt callbacks not registered — call registerPromptCallbacks() at app init`);return zi}async function Hi(e){return Ni((await crypto.subtle.digest(`SHA-256`,e)).slice(0,8))}async function Ui(e,t,n){await Promise.all([P(p,se,e),P(p,ce,t),P(p,le,n)])}async function Wi(){await Promise.all([Fe(p,se),Fe(p,ce),Fe(p,le)])}async function Gi(e){return crypto.subtle.importKey(`raw`,e,{name:`AES-GCM`,length:256},!0,[`encrypt`,`decrypt`])}async function Ki(e){let t=e.find(e=>e.name===oe);if(!t)return null;let n=await ki(t.id);return{vault:JSON.parse(n),fileId:t.id}}async function qi(e,t){let n=JSON.stringify(e);t?await ji(t,n,`application/json`):await Ai(oe,n,`application/json`)}async function Ji(e,t){return Cn(e,t,ue,[`encrypt`,`decrypt`])}async function Yi(e,t){return Ni(await wn(e,t))}async function Xi(e,t){return Tn(Pi(e),t)}async function Zi(){let e=await N(p,se);e&&e.byteLength>0&&(Y=await Gi(e),Fi=!0)}async function Qi(e){let t=await Ki(e);if(!t)return Fi=!1,Y=null,null;let{vault:n,fileId:r}=t;Fi=!0;let[i,a,o]=await Promise.all([N(p,se),N(p,ce),N(p,le)]);if(i&&i.byteLength>0&&a)if(n.fingerprint!==a)Y=null,await Wi();else return Y=await Gi(i),o&&n.salt!==o&&(await Vi().showRotationNotice()===`enter-now`&&await ea(n),await P(p,le,n.salt)),Y;return await $i(n)}async function $i(e){let t=await Vi().promptPassphrase(`unlock`);if(t===null)return null;try{let n=await Ji(t,Pi(e.salt)),r=await Xi(e.wrapped_content_key,n);if(await Hi(r)!==e.fingerprint)throw Error(`Fingerprint mismatch after successful unwrap`);return Y=await Gi(r),await Ui(r,e.fingerprint,e.salt),Y}catch{return null}}async function ea(e){let t=await Vi().promptPassphrase(`unlock`);if(t!==null)try{let n=await Ji(t,Pi(e.salt));await Xi(e.wrapped_content_key,n)}catch{}}async function ta(e){let t=crypto.getRandomValues(new Uint8Array(16)),n=crypto.getRandomValues(new Uint8Array(32)),r=await Ji(e,t),i=await Yi(n.buffer,r),a=await Hi(n.buffer),o={version:1,kdf:`pbkdf2-sha256`,iterations:ue,salt:Ni(t.buffer),wrapped_content_key:i,fingerprint:a};await qi(o);let s=await Oi();for(let e of s)aa(e.name)&&await Mi(e.id);await Ui(n.buffer,a,o.salt),Y=await Gi(n.buffer),Fi=!0}async function na(e){if(!Y)throw Error(`No CEK available for rotation`);let t=await crypto.subtle.exportKey(`raw`,Y),n=crypto.getRandomValues(new Uint8Array(16)),r=Ni(n.buffer);await qi({version:1,kdf:`pbkdf2-sha256`,iterations:ue,salt:r,wrapped_content_key:await Yi(t,await Ji(e,n)),fingerprint:await Hi(t)},(await Oi()).find(e=>e.name===oe)?.id),await P(p,le,r)}async function ra(){let e=await Oi();for(let t of e)(aa(t.name)||t.name===`_freedbt_vault_v1.json`)&&await Mi(t.id);await Wi(),Y=null,Fi=!1}var ia=new Set([C,ie,ne]);function aa(e){return ia.has(e)||e.endsWith(`.toml`)}var oa=class extends Error{constructor(){super(`Encryption is enabled but no content key is available`),this.name=`NeedPassphraseError`}};function sa(e){let t=new Uint8Array(e),n=``;for(let e=0;e<t.byteLength;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function ca(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n.buffer}var la=Oi,ua=Mi;async function X(e,t){let n=await ki(e);if(!aa(t)||!Ii())return n;if(!Li())throw new oa;let r=await Tn(ca(n),Ri());return new TextDecoder().decode(r)}async function da(e,t,n,r){if(!aa(e)||!Ii())return Ai(e,t,n,r);if(!Li())throw new oa;return Ai(e,sa(await wn(new TextEncoder().encode(t),Ri())),n,r)}async function Z(e,t,n,r,i){if(!aa(t)||!Ii())return ji(e,n,r,i);if(!Li())throw new oa;return ji(e,sa(await wn(new TextEncoder().encode(n),Ri())),r,i)}function fa(e,t){let n=JSON.parse(e),r=JSON.parse(t),i=new Map;for(let e of r)i.set(e.recorded_at,e);for(let e of n){let t=i.get(e.recorded_at);if(!t){i.set(e.recorded_at,e);continue}let n=new Date(e.edited_at??e.recorded_at).getTime(),r=new Date(t.edited_at??t.recorded_at).getTime(),a=n>=r?e:t,o=Math.max(n,r),s={...a};delete s.tombstoned_at;let c,l=0;for(let n of[e,t])if(n.tombstoned_at){let e=new Date(n.tombstoned_at).getTime();e>o&&e>l&&(c=n.tombstoned_at,l=e)}c&&(s.tombstoned_at=c),i.set(e.recorded_at,s)}let a=[...i.values()].sort((e,t)=>we(e.recorded_at,t.recorded_at));return JSON.stringify(a,null,2)}function pa(e,t){let n=JSON.parse(e),r=JSON.parse(t),i=new Map;for(let e of r)i.set(e.id,e);for(let e of n){let t=i.get(e.id);if(!t){i.set(e.id,e);continue}let n=new Date(e.edited_at??e.created_at).getTime(),r=new Date(t.edited_at??t.created_at).getTime(),a=n>=r?e:t,o=Math.max(n,r),s={...a};delete s.tombstoned_at;let c,l=0;for(let n of[e,t])if(n.tombstoned_at){let e=new Date(n.tombstoned_at).getTime();e>o&&e>l&&(c=n.tombstoned_at,l=e)}c&&(s.tombstoned_at=c),i.set(e.id,s)}let a=[...i.values()].sort((e,t)=>we(e.created_at,t.created_at));return JSON.stringify(a,null,2)}function ma(e,t){let n=JSON.parse(e),r=JSON.parse(t),i=new Map;for(let e of r)i.set(e.startTime,e);for(let e of n){let t=i.get(e.startTime);if(!t){i.set(e.startTime,e);continue}e.stages&&!t.stages&&i.set(e.startTime,e)}let a=[...i.values()].sort((e,t)=>e.startTime-t.startTime);return JSON.stringify(a,null,2)}var ha=t({fullSync:()=>ja,isSyncing:()=>wa,onAuthExpired:()=>Ea,onSyncStatusChange:()=>Sa,runFullSyncOnLoad:()=>Oa,scheduleMergeSync:()=>Na,scheduleSingleUpload:()=>Ma,scheduleSyncedSettingsUpload:()=>Pa,syncDeletion:()=>Fa}),ga={[C]:{merge:fa,readLocal:ft,writeLocal:pt},[ne]:{merge:ma,readLocal:Ct,writeLocal:wt},[ie]:{merge:pa,readLocal:Et,writeLocal:Dt}},_a=!1,va=null,ya=null,ba=new Map,xa=[];function Sa(e){xa.push(e)}function Ca(){for(let e of xa)e()}function wa(){return _a}var Ta=[];function Ea(e){Ta.push(e)}function Da(){if(M().syncEnabled)for(let e of Ta)e()}function Oa(){M().syncEnabled&&R().fullSyncOnLoad&&wi()&&ja().catch(()=>{})}async function ka(e){let t=e.find(e=>e.name===S);if(!t)return{manifest:{deleted:{}},fileId:null};try{let e=await X(t.id,S);return{manifest:JSON.parse(e),fileId:t.id}}catch{return{manifest:{deleted:{}},fileId:t.id}}}async function Aa(e,t){let n=JSON.stringify(e);t?await Z(t,S,n,`application/json`):await da(S,n,`application/json`)}async function ja(){if(!wi())throw Error(`Not signed in`);if(_a)throw Error(`Sync already in progress`);_a=!0,Ca();try{let[e,t]=await Promise.all([Qe(),la()]);await Qi(t);let{manifest:n,fileId:r}=await ka(t),i=!1,a=new Map(e.map(e=>[e.filename,e.content])),o=new Map;for(let e of t)e.name.endsWith(`.toml`)&&o.set(e.name,e);let s=new Set([...a.keys(),...o.keys()]),c=0,l=0,u=0,d=[];for(let e of s){let t=a.has(e),r=o.has(e),s=e in n.deleted;if(t&&!r){let t=a.get(e),r=We(t);if(s){let t=new Date(r.metadata.updated_at).getTime();if(new Date(n.deleted[e]).getTime()>t){let t=Ia(e);t&&(await Je(t.formId,t.date,t.index),u++);continue}delete n.deleted[e],i=!0}await da(e,t,void 0,r.metadata.updated_at),c++}else if(!t&&r){let t=o.get(e);if(s){await ua(t.id),u++;continue}let n=await X(t.id,e);d.push({filename:e,content:n}),l++}else if(t&&r){let t=a.get(e),n=o.get(e),r=We(t),i=new Date(r.metadata.updated_at).getTime(),s=new Date(n.modifiedTime).getTime();if(i>s)await Z(n.id,e,t,void 0,r.metadata.updated_at),c++;else if(s>i){let a=await X(n.id,e),o=We(a);new Date(o.metadata.updated_at).getTime()>i?(d.push({filename:e,content:a}),l++):(await Z(n.id,e,t,void 0,r.metadata.updated_at),c++)}}}d.length>0&&await $e(d);for(let[e,n]of Object.entries(ga)){let r=await n.readLocal(),i=t.find(t=>t.name===e);if(r&&!i)await da(e,r,`application/json`),c++;else if(!r&&i){let t=await X(i.id,e);await n.writeLocal(t),l++}else if(r&&i){let t=await X(i.id,e),a=n.merge(r,t);a!==t&&(await Z(i.id,e,a,`application/json`),c++),a!==r&&(await n.writeLocal(a),l++)}}let f=await ut(),p=t.find(e=>e.name===m),h=f?La(f):void 0;if(f&&!p)await da(m,f,`application/json`,h),c++;else if(!f&&p)await dt(await X(p.id,m)),l++;else if(f&&p){let e=h?new Date(h).getTime():0,t=new Date(p.modifiedTime).getTime();if(e>t)await Z(p.id,m,f,void 0,h),c++;else if(t>e){let t=await X(p.id,m),n=La(t);(n?new Date(n).getTime():0)>e?(await dt(t),l++):(await Z(p.id,m,f,void 0,h),c++)}}let g=await bt(),_=t.find(e=>e.name===w),v=g?La(g):void 0;if(g&&!_)await da(w,g,`application/json`,v),c++;else if(!g&&_)await xt(await X(_.id,w)),l++;else if(g&&_){let e=v?new Date(v).getTime():0,t=new Date(_.modifiedTime).getTime();if(e>t)await Z(_.id,w,g,void 0,v),c++;else if(t>e){let t=await X(_.id,w),n=La(t);(n?new Date(n).getTime():0)>e?(await xt(t),l++):(await Z(_.id,w,g,void 0,v),c++)}}i&&await Aa(n,r);let y=M();return y.lastSyncedAt=j(),Me(y),{uploaded:c,downloaded:l,deleted:u}}finally{_a=!1,Ca()}}function Ma(e,t){if(M().syncEnabled&&R().autoSyncEnabled){if(!wi()){Da();return}Ii()&&!Li()||(va&&clearTimeout(va),va=setTimeout(async()=>{try{let n=We(t).metadata.updated_at,r=(await la()).find(t=>t.name===e);r?await Z(r.id,e,t,void 0,n):await da(e,t,void 0,n)}catch(e){console.error(`Background sync upload failed:`,e)}},2e3))}}function Na(e){if(!M().syncEnabled||!R().autoSyncEnabled)return;if(!wi()){Da();return}if(Ii()&&!Li())return;let t=ga[e];if(!t)return;let n=ba.get(e);n&&clearTimeout(n),ba.set(e,setTimeout(async()=>{ba.delete(e);try{let n=await t.readLocal();if(!n)return;let r=(await la()).find(t=>t.name===e);if(!r){await da(e,n,`application/json`);return}let i=await X(r.id,e),a=t.merge(n,i);a!==i&&await Z(r.id,e,a,`application/json`),a!==n&&await t.writeLocal(a)}catch(t){console.error(`Background merge sync failed for ${e}:`,t)}},2e3))}function Pa(){if(M().syncEnabled&&R().autoSyncEnabled){if(!wi()){Da();return}ya&&clearTimeout(ya),ya=setTimeout(async()=>{try{let e=await bt();if(!e)return;let t=La(e),n=(await la()).find(e=>e.name===w);n?await Z(n.id,w,e,`application/json`,t):await da(w,e,`application/json`,t)}catch(e){console.error(`Background synced settings upload failed:`,e)}},2e3)}}async function Fa(e){if(M().syncEnabled&&R().autoSyncEnabled){if(!wi()){Da();return}try{let t=await la(),{manifest:n,fileId:r}=await ka(t);n.deleted[e]=j(),await Aa(n,r);let i=t.find(t=>t.name===e);i&&await ua(i.id)}catch(e){console.error(`Background sync deletion failed:`,e)}}}function Ia(e){let t=e.match(/^(.+?)_(\d{4}-\d{2}-\d{2})(?:_(\d+))?\.toml$/);if(!t)return null;let n=t[3]?parseInt(t[3],10):1;return n<1?null:{formId:t[1],date:t[2],index:n}}function La(e){try{let t=JSON.parse(e);if(typeof t._updated_at==`string`)return t._updated_at}catch{}}var Q=null,Ra=!1;function za(){Ea(Ba),document.addEventListener(`visibilitychange`,()=>{if(document.visibilityState===`visible`){if(wi()&&Q){Va();return}Ba()}}),L().then(Ba).catch(()=>{})}function Ba(){M().syncEnabled&&(wi()||R().autoReauthPrompt&&(Ra||Ua()))}function Va(){Q&&=(Q.remove(),null)}function Ha(){Ra=!1,Va()}function Ua(){Q||(Q=document.createElement(`div`),Q.className=`reauth-banner`,Q.innerHTML=`
    <span class="reauth-banner-text">Google session expired — sync is paused.</span>
    <button class="btn btn-small reauth-banner-btn">Re-authorize</button>
    <button class="reauth-banner-dismiss" aria-label="Dismiss">×</button>
  `,document.body.prepend(Q),Q.querySelector(`.reauth-banner-btn`)?.addEventListener(`click`,async()=>{try{xi(),await Si();let e=M();e.syncEnabled=!0,e.googleEmail=Ti(),Me(e),Va();try{await ja()}catch{}}catch(e){if(String(e).includes(`popup_closed`)||String(e).includes(`access_denied`))return;console.error(`Re-authorization failed:`,e)}}),Q.querySelector(`.reauth-banner-dismiss`)?.addEventListener(`click`,()=>{Ra=!0,Va()}))}function Wa(e,t){let n=document.createElement(`dialog`);return n.className=e,n.innerHTML=t,document.body.appendChild(n),n.addEventListener(`close`,()=>n.remove(),{once:!0}),n}function Ga(e){let t=e===`create`,n=Wa(`crypto-dialog`,`
    <form class="crypto-dialog-form" method="dialog">
      <h3>${t?`Create sync passphrase`:`Enter sync passphrase`}</h3>
      ${t?`
        <p class="crypto-dialog-text">
          This passphrase encrypts your data in Google Drive.
          <strong>If you permanently lose access to all your devices with your
          unencrypted DBT data and forget this passphrase, your data in Drive
          is unrecoverable.</strong>
        </p>
      `:`
        <p class="crypto-dialog-text">
          Your data in Google Drive is encrypted. Enter your passphrase to sync.
        </p>
      `}
      <label class="crypto-dialog-label">
        Passphrase
        <input
          type="password"
          class="crypto-dialog-input"
          id="crypto-passphrase"
          autocomplete="off"
          spellcheck="false"
          placeholder="${t?`at least 12 characters`:`passphrase`}"
        />
      </label>
      ${t?`
        <label class="crypto-dialog-label">
          Confirm passphrase
          <input
            type="password"
            class="crypto-dialog-input"
            id="crypto-passphrase-confirm"
            autocomplete="off"
            spellcheck="false"
            placeholder="re-enter passphrase"
          />
        </label>
      `:``}
      <div class="crypto-dialog-error" id="crypto-dialog-error"></div>
      <div class="crypto-dialog-actions">
        <button type="button" class="btn btn-secondary" id="crypto-cancel">Cancel</button>
        <button type="submit" class="btn" id="crypto-submit">
          ${t?`Enable Encryption`:`Unlock`}
        </button>
      </div>
    </form>
  `);return new Promise(e=>{let r=n.querySelector(`.crypto-dialog-form`),i=n.querySelector(`#crypto-passphrase`),a=n.querySelector(`#crypto-passphrase-confirm`),o=n.querySelector(`#crypto-dialog-error`);n.querySelector(`#crypto-cancel`).addEventListener(`click`,()=>{n.close(`cancel`),e(null)}),n.addEventListener(`cancel`,t=>{t.preventDefault(),n.close(`cancel`),e(null)}),r.addEventListener(`submit`,r=>{r.preventDefault();let s=i.value;if(!s){o.textContent=`Please enter a passphrase.`;return}if(t){if(s.length<12){o.textContent=`Passphrase must be at least 12 characters.`;return}if(a&&s!==a.value){o.textContent=`Passphrases do not match.`;return}}n.close(`ok`),e(s)}),n.showModal(),queueMicrotask(()=>i.focus())})}function Ka(){let e=Wa(`crypto-dialog`,`
    <h3>Passphrase changed</h3>
    <p class="crypto-dialog-text">
      Your sync passphrase was changed on another device. Your data will keep
      syncing normally, but if you ever need to set up a new device, you'll
      need the new passphrase.
    </p>
    <div class="crypto-dialog-actions">
      <button class="btn btn-secondary" id="crypto-not-now">Not now</button>
      <button class="btn" id="crypto-enter-now">Enter new passphrase</button>
    </div>
  `);return new Promise(t=>{e.querySelector(`#crypto-not-now`).addEventListener(`click`,()=>{e.close(),t(`not-now`)}),e.querySelector(`#crypto-enter-now`).addEventListener(`click`,()=>{e.close(),t(`enter-now`)}),e.addEventListener(`cancel`,n=>{n.preventDefault(),e.close(),t(`not-now`)}),e.showModal()})}function qa(e){let t=Wa(`crypto-dialog`,`
    <h3>Encryption setup failed</h3>
    <p class="crypto-dialog-text">${e}</p>
    <div class="crypto-dialog-actions">
      <button class="btn" id="crypto-ok">OK</button>
    </div>
  `);t.querySelector(`#crypto-ok`).addEventListener(`click`,()=>t.close()),t.addEventListener(`cancel`,()=>t.close()),t.showModal()}async function Ja(e){let t=Ne(),n=I(),r=M(),i=await L(),a=`Not available in this browser`;t&&(a=await F()?`Connected (folder chosen)`:`Available but no folder chosen`);let s=wi(),c=Ti(),l=!!v,u=Ii(),d=r.lastSyncedAt?new Date(r.lastSyncedAt).toLocaleString():`Never`;e.innerHTML=`
    <div class="settings-view">
      <header class="editor-header">
        <div class="editor-header-left">
          <a href="${o({view:`home`})}" class="btn btn-secondary btn-back">&larr; Back</a>
          <h2>Settings</h2>
        </div>
      </header>

      <section class="settings-section">
        <h3>Storage</h3>
        <dl class="settings-info">
          <div>
            <dt>Active backend</dt>
            <dd>${n===`fsa`?`File System Access API`:`IndexedDB (browser storage)`}</dd>
          </div>
          ${t&&!r.fsaDeclined?`
          <div>
            <dt>File System Access</dt>
            <dd>${a}</dd>
          </div>`:``}
        </dl>
        ${t?`<div class="settings-actions">
                 <div class="settings-action">
                   <label class="settings-toggle">
                     <input type="checkbox" id="fsa-enabled-checkbox"${r.fsaDeclined?``:` checked`}>
                     Use filesystem for storage
                   </label>
                   <p class="settings-help">Save data as files on disk. Requires choosing a folder. May not work well on mobile.</p>
                 </div>
               </div>
               ${r.fsaDeclined?``:`<button id="fsa-choose-btn" class="btn">Choose / Change Folder</button>`}`:`<p class="settings-note">File System Access API is not available. Using browser storage (IndexedDB).
               Your data persists in this browser but is <strong>not backed up as normal files automatically</strong>, and browsers make it easy to delete this data.
               Use the export feature below regularly to get your data as regular files. Use the Google Drive sync feature for a more-robust backup.</p>`}
      </section>

      <section class="settings-section">
        <h3>Google Drive Sync</h3>
        ${l?s?`
                <dl class="settings-info">
                  <div>
                    <dt>Account</dt>
                    <dd>${c??`Signed in`}</dd>
                  </div>
                  <div>
                    <dt>Last synced</dt>
                    <dd id="last-synced-display">${d}</dd>
                  </div>
                </dl>
                <div class="settings-actions">
                  <div class="settings-action">
                    <button id="sync-now-btn" class="btn" ${wa()?`disabled`:``}>
                      ${wa()?`Syncing…`:`Sync Now`}
                    </button>
                    <p class="settings-help" id="sync-status-text">
                      Sync fills between this device and Google Drive.
                    </p>
                  </div>
                  <div class="settings-action">
                    <label class="settings-toggle">
                      <input type="checkbox" id="auto-sync-checkbox"${i.autoSyncEnabled?` checked`:``}>
                      Auto-sync changes
                    </label>
                    <p class="settings-help">Automatically upload changes to Google Drive after saving.</p>
                  </div>
                  <div class="settings-action">
                    <label class="settings-toggle">
                      <input type="checkbox" id="auto-reauth-checkbox"${i.autoReauthPrompt?` checked`:``}>
                      Re-auth prompt
                    </label>
                    <p class="settings-help">Show a prompt when your Google session expires.</p>
                  </div>
                  <div class="settings-action">
                    <label class="settings-toggle">
                      <input type="checkbox" id="full-sync-on-load-checkbox"${i.fullSyncOnLoad?` checked`:``}>
                      Full sync on load
                    </label>
                    <p class="settings-help">Run a full sync on app startup to pull remote changes before editing.</p>
                  </div>
                  <div class="settings-action settings-encryption-group">
                    <h4 class="settings-subheading">Drive Encryption</h4>
                    ${u?`
                      <p class="settings-help settings-encryption-status">Encryption is <strong>enabled</strong>. Your data is encrypted before uploading to Drive.</p>
                      <div class="settings-encryption-actions">
                        <button id="change-passphrase-btn" class="btn btn-secondary">Change Passphrase</button>
                        <button id="disable-encryption-btn" class="btn btn-danger">Disable Encryption</button>
                      </div>
                    `:`
                      <p class="settings-help">Encrypt your data in Google Drive so that a Google breach or insider cannot read it.</p>
                      <button id="enable-encryption-btn" class="btn">Enable Encryption</button>
                    `}
                  </div>
                  <div class="settings-action">
                    <button id="sign-out-btn" class="btn btn-secondary">Sign Out</button>
                    <p class="settings-help">Disconnect Google account. Local data is not affected.</p>
                  </div>
                </div>
              `:r.syncEnabled?`
                  <dl class="settings-info">
                    <div>
                      <dt>Account</dt>
                      <dd>${r.googleEmail??`Previously signed in`}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>Session expired</dd>
                    </div>
                    <div>
                      <dt>Last synced</dt>
                      <dd>${d}</dd>
                    </div>
                  </dl>
                  <div class="settings-actions">
                    <div class="settings-action">
                      <button id="sign-in-btn" class="btn">Re-authorize</button>
                      <p class="settings-help">Your Google session has expired. Re-authorize to resume syncing.</p>
                    </div>
                    <div class="settings-action">
                      <button id="sign-out-btn" class="btn btn-secondary">Disconnect</button>
                      <p class="settings-help">Remove Google account connection. Local data is not affected.</p>
                    </div>
                  </div>
                `:`
                  <p>Sync your fills across devices via your Google account.
                     Data is stored in a hidden app-specific folder that only this app can access.</p>
                  <div class="settings-actions">
                    <div class="settings-action">
                      <button id="sign-in-btn" class="btn">Sign in with Google</button>
                      <p class="settings-help">Connects to Google Drive for cross-device sync.</p>
                    </div>
                  </div>
                `:`<p class="settings-note">Google Drive sync is not configured. A Google Cloud OAuth client ID
               must be set in <code>src/constants.ts</code> to enable sync. See
               <code>doc/GoogleDriveSync.md</code> for setup instructions.</p>`}
      </section>

      <section class="settings-section">
        <h3>Data Management</h3>
        <div class="settings-actions">
          <div class="settings-action">
            <label class="settings-toggle">
              <input type="checkbox" id="autosave-checkbox"${i.autosaveEnabled?` checked`:``}>
              Auto-save forms
            </label>
            <p class="settings-help">Automatically save form drafts after a few seconds of inactivity.</p>
          </div>
          <div class="settings-action">
            <button id="export-btn" class="btn btn-secondary">Export All Data</button>
            <p class="settings-help">Download all fills as TOML files (includes all fields).</p>
          </div>
          <div class="settings-action">
            <button id="export-filled-btn" class="btn btn-secondary">Export for Sharing</button>
            <p class="settings-help">Download fills with only user-entered values (empty fields stripped).</p>
          </div>
          <div class="settings-action">
            <label class="btn btn-secondary file-upload-label" for="import-input">
              Import Data
              <input type="file" id="import-input" accept=".toml" multiple hidden>
            </label>
            <p class="settings-help">Import TOML fill files.</p>
          </div>
          <div class="settings-action">
            <button id="clear-btn" class="btn btn-danger">Clear Browser Storage</button>
            <p class="settings-help">Remove all fills from IndexedDB. Does not affect files saved via File System Access.</p>
          </div>
        </div>
      </section>

      <section class="settings-section">
        <h3>Mood records</h3>
        <div class="settings-actions">
          <div class="settings-action">
            <label class="settings-toggle">
              <input type="checkbox" id="mood-half-points-checkbox"${i.moodHalfPoints?` checked`:``}>
              Half-points
            </label>
            <p class="settings-help">Enable half-points in the 7-point mood record scale.</p>
          </div>
          <div class="settings-action">
            <label class="settings-toggle">
              <input type="checkbox" id="mood-ranges-checkbox"${i.moodRanges?` checked`:``}>
              Mood ranges
            </label>
            <p class="settings-help">Enable choosing a mood range in mood records (useful for longer time periods).</p>
          </div>
        </div>
      </section>

      <section class="settings-section">
        <h3>About</h3>
        <p>Private fillable DBT worksheets and mood records.</p>
        <p>${r.syncEnabled?`Sync is enabled - your data is also stored in your Google Drive.`:`No data leaves your device unless you enable Google Drive sync.`}</p>
      </section>
    </div>
  `;let f=e.querySelector(`#fsa-choose-btn`);f&&f.addEventListener(`click`,async()=>{try{await ze(),await Ja(e)}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return;throw e}});let p=e.querySelector(`#fsa-enabled-checkbox`);p&&p.addEventListener(`change`,async()=>{let t=M();p.checked?(t.fsaDeclined=!1,t.persistenceBackend=`fsa`):(t.fsaDeclined=!0,t.persistenceBackend=`indexeddb`),Me(t),await Ja(e)});let m=e.querySelector(`#sign-in-btn`);m&&m.addEventListener(`click`,async()=>{try{xi(),await Si();let t=M();t.syncEnabled=!0,t.googleEmail=Ti(),Me(t),Ha(),await Ja(e);try{await ja(),await Ja(e)}catch(e){console.error(`Initial sync failed:`,e)}}catch(e){if(String(e).includes(`popup_closed`)||String(e).includes(`access_denied`))return;console.error(`Sign-in failed:`,e),alert(`Sign-in failed: ${e instanceof Error?e.message:`Unknown error`}`)}});let h=e.querySelector(`#sign-out-btn`);h&&h.addEventListener(`click`,()=>{Ei();let t=M();t.syncEnabled=!1,t.googleEmail=null,Me(t),Ja(e)});let g=e.querySelector(`#sync-now-btn`),_=e.querySelector(`#sync-status-text`);g&&g.addEventListener(`click`,async()=>{g.disabled=!0,g.textContent=`Syncing…`,_&&(_.textContent=`Syncing…`);try{let t=await ja();_&&(_.textContent=`Done: ${t.uploaded} uploaded, ${t.downloaded} downloaded, ${t.deleted} deleted.`);let n=e.querySelector(`#last-synced-display`);n&&(n.textContent=new Date().toLocaleString())}catch(e){_&&(_.textContent=`Sync failed: ${e instanceof Error?e.message:`Unknown error`}`)}finally{g.disabled=!1,g.textContent=`Sync Now`}}),Sa(()=>{g&&(g.disabled=wa(),g.textContent=wa()?`Syncing…`:`Sync Now`)});let y=e.querySelector(`#autosave-checkbox`);y&&y.addEventListener(`change`,async()=>{let e=await L();e.autosaveEnabled=y.checked,await z(e)});let b=e.querySelector(`#auto-sync-checkbox`);b&&b.addEventListener(`change`,async()=>{let e=await L();e.autoSyncEnabled=b.checked,await z(e)});let x=e.querySelector(`#auto-reauth-checkbox`);x&&x.addEventListener(`change`,async()=>{let e=await L();e.autoReauthPrompt=x.checked,await z(e)});let S=e.querySelector(`#full-sync-on-load-checkbox`);S&&S.addEventListener(`change`,async()=>{let e=await L();e.fullSyncOnLoad=S.checked,await z(e)});let C=e.querySelector(`#enable-encryption-btn`);C&&C.addEventListener(`click`,async()=>{try{await ja()}catch(e){alert(`Pre-flight sync failed: ${e instanceof Error?e.message:`Unknown error`}. Fix sync issues before enabling encryption.`);return}let t=await Ga(`create`);if(t)try{await ta(t),await ja(),await Ja(e)}catch(e){alert(`Encryption setup failed: ${e instanceof Error?e.message:`Unknown error`}`)}});let ee=e.querySelector(`#disable-encryption-btn`);ee&&ee.addEventListener(`click`,async()=>{if(confirm(`This will remove encryption from your Drive data. Your data will be re-uploaded in plaintext. Continue?`))try{await ra(),await ja(),await Ja(e)}catch(e){alert(`Failed to disable encryption: ${e instanceof Error?e.message:`Unknown error`}`)}});let w=e.querySelector(`#change-passphrase-btn`);w&&w.addEventListener(`click`,async()=>{let e=await Ga(`create`);if(e)try{await na(e),alert(`Passphrase changed. Other devices will be notified on their next sync.`)}catch(e){alert(`Failed to change passphrase: ${e instanceof Error?e.message:`Unknown error`}`)}});let te=e.querySelector(`#mood-half-points-checkbox`);te&&te.addEventListener(`change`,async()=>{let e=await L();e.moodHalfPoints=te.checked,await z(e)});let ne=e.querySelector(`#mood-ranges-checkbox`);ne&&ne.addEventListener(`change`,async()=>{let e=await L();e.moodRanges=ne.checked,await z(e)}),e.querySelector(`#export-btn`)?.addEventListener(`click`,async()=>{let e=await Qe();if(e.length===0){alert(`No fills to export.`);return}for(let{filename:t,content:n}of e){let e=new Blob([n],{type:`application/toml`}),r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,i.click(),URL.revokeObjectURL(r)}}),e.querySelector(`#export-filled-btn`)?.addEventListener(`click`,async()=>{let e=await nt();if(e.length===0){alert(`No fills to export.`);return}for(let{filename:t,content:n}of e){let e=new Blob([n],{type:`application/toml`}),r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=t,i.click(),URL.revokeObjectURL(r)}}),e.querySelector(`#import-input`)?.addEventListener(`change`,async e=>{let t=e.target,n=t.files;if(!n||n.length===0)return;let r=[];for(let e of n){let t=await e.text();r.push({filename:e.name,content:t})}let i=await $e(r);alert(`Imported ${i} fill(s).`),t.value=``}),e.querySelector(`#clear-btn`)?.addEventListener(`click`,async()=>{if(!confirm(`This will delete all fills from browser storage (IndexedDB). Files saved to disk via File System Access are not affected. Continue?`))return;await rt();let t=M();t.persistenceBackend===`indexeddb`&&(t.fsaDirectoryChosen=!1),Me(t),alert(`Browser storage cleared.`),await Ja(e)})}var Ya=[1,2,3,4,5,6,10,12,15,20,30,60],Xa=[[2,12],[3,8],[4,6],[6,4],[8,3],[12,2]],Za=[0,160,200,240,280,320];function Qa(e){let t=5,n=!1,r=[4,6],i=0,a=!1;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dt-body">
        <div id="dtp-mount"></div>
        <p class="demo-dt-readout">Selected: <strong id="dtp-out"></strong></p>
        <div class="demo-dt-controls">
          <label>minRes
            <select id="ctl-minres">
              ${Ya.map(e=>`<option value="${e}"${e===t?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-h24"${n?` checked`:``}> 24h
          </label>
          <label>grid
            <select id="ctl-grid">
              ${Xa.map(([e,t])=>`<option value="${e},${t}"${e===r[0]&&t===r[1]?` selected`:``}>${e}\u00D7${t}</option>`).join(``)}
            </select>
          </label>
          <label>clock cap
            <select id="ctl-cap">
              ${Za.map(e=>`<option value="${e}"${e===i?` selected`:``}>${e===0?`none`:e+`px`}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-vert"${a?` checked`:``}> vert hours
          </label>
        </div>
      </div>
    </div>
  `;let o=document.getElementById(`dtp-mount`),s=document.getElementById(`dtp-out`);function c(){return{initDatetime:new Date,minuteResolution:t,hour24:n,hourGridDims:r,maxClockDiameter:i||void 0,vertHours:a,onChange(e){s.textContent=e.toLocaleString()}}}function l(){o.innerHTML=``;let e=Yt(c());o.appendChild(e.element),s.textContent=e.getDatetime().toLocaleString()}l(),document.getElementById(`ctl-minres`).addEventListener(`change`,e=>{t=parseInt(e.target.value,10),l()}),document.getElementById(`ctl-h24`).addEventListener(`change`,e=>{n=e.target.checked,l()}),document.getElementById(`ctl-grid`).addEventListener(`change`,e=>{let[t,n]=e.target.value.split(`,`).map(Number);r=[t,n],l()}),document.getElementById(`ctl-cap`).addEventListener(`change`,e=>{i=parseInt(e.target.value,10),l()}),document.getElementById(`ctl-vert`).addEventListener(`change`,e=>{a=e.target.checked,l()})}var $a=[1,2,3,4,5,6,10,12,15,20,30,60],eo=[[2,12],[3,8],[4,6],[6,4],[8,3],[12,2]],to=[0,160,200,240,280,320],no=[15,30,45,60,90,120,180,240],ro=[400,500,600,700,800],io=15,ao=600;function oo(e,t){let n=Math.round(Math.abs(t-e)/6e4),r=Math.floor(n/60),i=n%60;return r>0&&i>0?`${r}h ${i}m`:r>0?`${r}h`:`${i}m`}function so(e){let t=5,n=!1,r=[8,3],i=0,a=io,o=ao,s=!0;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dtr-body">
        <div id="dtp-range-mount"></div>
        <p class="demo-dt-readout" id="dtp-range-readout"></p>
        <div class="demo-dt-controls">
          <label>minRes
            <select id="ctl-minres">
              ${$a.map(e=>`<option value="${e}"${e===t?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-h24"${n?` checked`:``}> 24h
          </label>
          <label>grid
            <select id="ctl-grid">
              ${eo.map(([e,t])=>`<option value="${e},${t}"${e===r[0]&&t===r[1]?` selected`:``}>${e}\u00D7${t}</option>`).join(``)}
            </select>
          </label>
          <label>clock cap
            <select id="ctl-cap">
              ${to.map(e=>`<option value="${e}"${e===i?` selected`:``}>${e===0?`none`:e+`px`}</option>`).join(``)}
            </select>
          </label>
          <label>back min
            <select id="ctl-back">
              ${no.map(e=>`<option value="${e}"${e===a?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>stack &lt;
            <select id="ctl-stack">
              ${ro.map(e=>`<option value="${e}"${e===o?` selected`:``}>${e}px</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-vert"${s?` checked`:``}> vert hours
          </label>
        </div>
      </div>
    </div>
  `;let c=document.getElementById(`dtp-range-mount`),l=document.getElementById(`dtp-range-readout`);function u(e,t){let n=oo(e.getTime(),t.getTime()),r=t.getTime()<e.getTime();l.innerHTML=`<strong>${e.toLocaleString()}</strong> \u2192 <strong>${t.toLocaleString()}</strong> \u2014 ${n}${r?` (inverted)`:``}`}function d(){return{initDatetime:new Date,initBackMinutes:a,minuteResolution:t,hour24:n,hourGridDims:r,maxClockDiameter:i||void 0,vertHours:s,stackThresholdPx:o,onChange:u}}function f(){c.innerHTML=``;let e=Xt(d());c.appendChild(e.element),u(e.getFrom(),e.getTo())}f(),document.getElementById(`ctl-minres`).addEventListener(`change`,e=>{t=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-h24`).addEventListener(`change`,e=>{n=e.target.checked,f()}),document.getElementById(`ctl-grid`).addEventListener(`change`,e=>{let[t,n]=e.target.value.split(`,`).map(Number);r=[t,n],f()}),document.getElementById(`ctl-cap`).addEventListener(`change`,e=>{i=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-back`).addEventListener(`change`,e=>{a=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-stack`).addEventListener(`change`,e=>{o=parseInt(e.target.value,10),f()}),document.getElementById(`ctl-vert`).addEventListener(`change`,e=>{s=e.target.checked,f()})}function co(e){return Number.isInteger(e)?`${jt[e]} ${e}`:String(e)}function lo(e,t){let n=Math.round(Math.abs(t-e)/6e4),r=Math.floor(n/60),i=n%60;return r>0&&i>0?`${r}h ${i}m`:r>0?`${r}h`:`${i}m`}var uo=!0,fo=!0;function po(e){let t=uo,n=fo;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dtr-body">
        <div id="mood-sel-mount" class="mood-sel-mount"></div>
        <p class="demo-dt-readout" id="mood-readout">No mood selected</p>
        <div id="dtp-range-mount"></div>
        <p class="demo-dt-readout" id="dtp-range-readout"></p>
        <div class="demo-dt-controls">
          <label><input type="checkbox" id="ctl-btw" checked> half-points</label>
          <label><input type="checkbox" id="ctl-modal" checked> modal (range)</label>
        </div>
      </div>
    </div>
  `;let r=document.getElementById(`mood-sel-mount`),i=document.getElementById(`mood-readout`),a=document.getElementById(`dtp-range-mount`),o=document.getElementById(`dtp-range-readout`);function s(e){if(!e){i.textContent=`No mood selected`;return}let[t,n]=e;i.textContent=t===n?co(t):`${co(t)} - ${co(n)}`}function c(e,t){let n=lo(e.getTime(),t.getTime()),r=t.getTime()<e.getTime();o.innerHTML=`<strong>${e.toLocaleString()}</strong> \u2192 <strong>${t.toLocaleString()}</strong> \u2014 ${n}${r?` (inverted)`:``}`}let l=Xt({initDatetime:new Date,initBackMinutes:15,minuteResolution:5,hour24:!1,hourGridDims:[8,3],vertHours:!0,stackThresholdPx:600,onChange:c});a.appendChild(l.element),c(l.getFrom(),l.getTo());function u(){r.innerHTML=``;let e=Nt({btwPoints:t,modal:n,onChange:s});r.appendChild(e.element),s(e.getValue())}u(),document.getElementById(`ctl-btw`).addEventListener(`change`,e=>{t=e.target.checked,u()}),document.getElementById(`ctl-modal`).addEventListener(`change`,e=>{n=e.target.checked,u()})}var mo=[1,2,3,4,5,6,10,12,15,20,30,60],ho=[[2,12],[3,8],[4,6],[6,4],[8,3],[12,2]],go=[0,160,200,240,280,320],_o=[15,30,45,60,90,120,180,240],vo=[400,500,600,700,800],yo=!0,bo=!0,xo=5,So=!1,Co=[8,3],wo=0,To=15,Eo=600,Do=!0;function Oo(e){let t=yo,n=bo,r=xo,i=So,a=[...Co],o=wo,s=To,c=Eo,l=Do;e.innerHTML=`
    <div class="demo-dt-view">
      <div class="demo-dtr-body">
        <div id="mood-rec-mount"></div>
        <p class="demo-dt-readout" id="mood-rec-readout">&mdash;</p>
        <div class="demo-dt-controls">
          <label><input type="checkbox" id="ctl-btw" checked> half-points</label>
          <label><input type="checkbox" id="ctl-modal" checked> modal (range)</label>
          <label>minRes
            <select id="ctl-minres">
              ${mo.map(e=>`<option value="${e}"${e===xo?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-h24"> 24h
          </label>
          <label>grid
            <select id="ctl-grid">
              ${ho.map(([e,t])=>`<option value="${e},${t}"${e===Co[0]&&t===Co[1]?` selected`:``}>${e}\u00D7${t}</option>`).join(``)}
            </select>
          </label>
          <label>clock cap
            <select id="ctl-cap">
              ${go.map(e=>`<option value="${e}"${e===wo?` selected`:``}>${e===0?`none`:e+`px`}</option>`).join(``)}
            </select>
          </label>
          <label>back min
            <select id="ctl-back">
              ${_o.map(e=>`<option value="${e}"${e===To?` selected`:``}>${e}</option>`).join(``)}
            </select>
          </label>
          <label>stack &lt;
            <select id="ctl-stack">
              ${vo.map(e=>`<option value="${e}"${e===Eo?` selected`:``}>${e}px</option>`).join(``)}
            </select>
          </label>
          <label>
            <input type="checkbox" id="ctl-vert" checked> vert hours
          </label>
        </div>
      </div>
    </div>
  `;let u=document.getElementById(`mood-rec-mount`),d=document.getElementById(`mood-rec-readout`);function f(e,t){d.innerHTML=`${t}mood: ${e.mood?e.mood[0]===e.mood[1]?String(e.mood[0]):`${e.mood[0]}-${e.mood[1]}`:`null`} &middot; note: ${e.note?`"${e.note}"`:`(none)`} &middot; from: ${e.dtrange.from.toLocaleString()} &middot; to: ${e.dtrange.to.toLocaleString()}`}function p(){u.innerHTML=``;let e=tn({mood_opt:{btwPoints:t,modal:n},time_opt:{initDatetime:new Date,initBackMinutes:s,minuteResolution:r,hour24:i,hourGridDims:a,maxClockDiameter:o||void 0,vertHours:l,stackThresholdPx:c},onAdd(e){f(e,`<strong>[add]</strong> `)},onCancel(){d.textContent=`[cancel] pressed`}});u.appendChild(e.element)}p(),document.getElementById(`ctl-btw`).addEventListener(`change`,e=>{t=e.target.checked,p()}),document.getElementById(`ctl-modal`).addEventListener(`change`,e=>{n=e.target.checked,p()}),document.getElementById(`ctl-minres`).addEventListener(`change`,e=>{r=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-h24`).addEventListener(`change`,e=>{i=e.target.checked,p()}),document.getElementById(`ctl-grid`).addEventListener(`change`,e=>{let[t,n]=e.target.value.split(`,`).map(Number);a=[t,n],p()}),document.getElementById(`ctl-cap`).addEventListener(`change`,e=>{o=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-back`).addEventListener(`change`,e=>{s=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-stack`).addEventListener(`change`,e=>{c=parseInt(e.target.value,10),p()}),document.getElementById(`ctl-vert`).addEventListener(`change`,e=>{l=e.target.checked,p()})}var ko=90,Ao=864e5;function jo(e){let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}function Mo(e){let t=jo(Date.now()),n=[];for(let r=e-1;r>=0;r--){let e=7+Math.sin(r/5)*1.2+(Math.random()-.5)*2.5;n.push({date:t-r*Ao,hours:Math.max(2.5,Math.min(11,e))})}return n}function No(e){let t=jo(Date.now()),n=[];for(let r=0;r<15;r++){let i=Math.floor(Math.random()*(e-2)),a=2+Math.floor(Math.random()*36),o=new Date(t-(e-1-i)*Ao+8*36e5),s=new Date(o.getTime()+a*36e5),c=Math.floor(Math.random()*3),l=c+1+Math.floor(Math.random()*(5-c));n.push({note:`Demo mood ${r+1}`,mood:[c,Math.min(l,5)],dtrange:{from:j(o),to:j(s)},recorded_at:j(o)})}return n}async function Po(e){let t,n=!1;try{t=(await mt()).filter(e=>!e.tombstoned_at),t.length===0&&(t=No(ko),n=!0)}catch{t=No(ko),n=!0}let r=Sn({showMoodRecords:!0,sleep:Mo(ko),moods:t});e.innerHTML=`
    <div style="max-width:960px;margin:0 auto;padding:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h2 style="margin:0">Sleep &amp; Mood</h2>
        <a href="#/" style="font-size:13px">\u2190 Home</a>
      </div>
      <div id="sm-plot-mount"></div>
      <p style="color:#999;font-size:12px;margin-top:8px">
        Sleep: demo data. Mood: ${n?`demo data`:`your saved records`}.
      </p>
    </div>
  `,e.querySelector(`#sm-plot-mount`).appendChild(r.element)}var Fo=`FreeDBT`,Io=document.querySelector(`#app`);if(!Io)throw Error(`Missing #app container element in document`);var $=Io;async function Lo(e){if(window.scrollTo(0,0),`formId`in e){let t=zr(e.formId);document.title=t?`${t.title} — ${Fo}`:Fo}else document.title=Fo;switch(e.view){case`home`:await oi($);break;case`new`:await pi($,{formId:e.formId,readonly:!1});break;case`edit`:await pi($,{formId:e.formId,date:e.date,index:e.index,readonly:!1});break;case`readonly`:await pi($,{formId:e.formId,date:e.date,index:e.index,readonly:!0});break;case`settings`:await Ja($);break;case`demo-datetime`:Qa($);break;case`demo-datetime-range`:so($);break;case`demo-mood`:po($);break;case`demo-mood-record`:Oo($);break;case`demo-sleep-mood`:await Po($);break}}za(),Bi({promptPassphrase:Ga,showRotationNotice:Ka,showEnrollmentFailure:qa}),Zi().then(()=>L()).then(()=>Oa()).catch(()=>{}),a(e=>{Lo(e).catch(e=>{console.error(`Route handling failed:`,e),$.innerHTML=`
      <div class="error-view">
        <h2>Something went wrong</h2>
        <p>${e instanceof Error?e.message:`Unknown error`}</p>
        <a href="#/" class="btn">Back to Home</a>
      </div>
    `})});