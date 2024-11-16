import { NvtCfg, NvtSetDesc } from "types/types";

export const DEFAULT_CONFIG: NvtCfg = {
    filename_index: "index",
    key_sort: "weight",
    key_headless: "headless",
    key_empty: "empty",
    key_retitled: "retitled",
    fbk_weight_folder: -20,
    fbk_weight_index: -10,
    fbk_weight_md: 0,
    fbk_weight_other: 20,
    fbk_headless: false,
    fbk_retitled: false,
    all_features: false,
};

export const SETTINGS_DESC: NvtSetDesc = {
    filename_index: {
        name: "File name of index",
        desc: 'Do not include the file extension, such as "index", "readme".',
    },
    key_sort: {
        name: "Sort key",
        desc: 'The key defined in the frontmatter and use its value as a weight to sort the ".md" files, eg: "weight", "order".',
    },
    fbk_weight_folder: {
        name: "Default weight for folder",
        desc: "Fallback for folder, if it does not possess a child index, or the value in index is invalid. ",
    },
    fbk_weight_index: {
        name: "Fixed weight for index",
        desc: "Fixed value sharing by each index.",
    },
    fbk_weight_md: {
        name: "Default weight for markdown",
        desc: 'Fallback for normal ".md" file.',
    },
    fbk_weight_other: {
        name: "Fixed weight for unknown file",
        desc: 'Fixed value for files except ".md".',
    },
    fbk_retitled: {
        name: 'Default value for key "retitled"',
        desc: 'Controlling the default behavior of folder naming, "ON" is "true", "OFF" is "false".',
    },
    all_features: {
        name: 'Enable features for "mkdocs-nav-weight"',
        desc: "Enable all features.",
    },
};
