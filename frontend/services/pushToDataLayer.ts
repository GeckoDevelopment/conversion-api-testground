type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
  };

declare const window: WindowWithDataLayer;

export const pushToDataLayer = (successEventName: string) => {
window.dataLayer.push({
    event: successEventName,
});
};