// ////////////////////////
// ACTION TYPES //////////
// //////////////////////
export const DEACTIVATE_EFFECTS = 'EFFECTS/DEACTIVATE_EFFECTS';
export const UPDATE_EFFECTS_AMOUNT = 'EFFECTS/UPDATE_EFFECTS_AMOUNT';
export const CHANGE_AXIS_EFFECT = 'SOUNDS/CHANGE_AXIS_EFFECT';
export const TWEAK_AXIS_PARAMETER = 'SOUNDS/TWEAK_AXIS_PARAMETER';

export const ADD_NOTE = 'NOTES/ADD_NOTE';
export const REMOVE_NOTE = 'NOTES/REMOVE_NOTE';

export const UPDATE_OSCILLATOR = 'OSCILLATORS/UPDATE_OSCILLATOR';

export const UPDATE_STAGE = 'ONBOARDING/UPDATE_STAGE';
export const GO_TO_NEXT_STAGE = 'ONBOARDING/GO_TO_NEXT_STAGE';
export const EXPERIMENT_WITH_NOTES = 'ONBOARDING/EXPERIMENT_WITH_NOTES';
export const EXPERIMENT_WITH_PAD = 'ONBOARDING/EXPERIMENT_WITH_PAD';

// ////////////////////////
// ACTION CREATORS ///////
// //////////////////////

export const deactivateEffects = () => ({
  type: DEACTIVATE_EFFECTS,
});

export const updateEffectsAmount = ({
  xAmount,
  yAmount,
  xCursor,
  yCursor,
}) => ({
  type: UPDATE_EFFECTS_AMOUNT,
  xAmount,
  yAmount,
  xCursor,
  yCursor,
});

export const changeAxisEffect = ({ axis, effect }) => ({
  type: CHANGE_AXIS_EFFECT,
  axis,
  effect,
});

export const tweakAxisParameter = ({ axis, options }) => ({
  type: TWEAK_AXIS_PARAMETER,
  axis,
  options,
});

export const addNote = ({ value, letter }) => ({
  type: ADD_NOTE,
  value,
  letter,
});

export const removeNote = ({ value }) => ({
  type: REMOVE_NOTE,
  value,
});

export const updateStage = ({ stage }) => ({
  type: UPDATE_STAGE,
  stage,
});

export const goToNextStage = () => ({
  type: GO_TO_NEXT_STAGE,
});

export const experimentWithNotes = () => ({
  type: EXPERIMENT_WITH_NOTES,
});

export const experimentWithPad = () => ({
  type: EXPERIMENT_WITH_PAD,
});

export const updateOscillator = ({ index, options }) => ({
  type: UPDATE_OSCILLATOR,
  index,
  options,
});
