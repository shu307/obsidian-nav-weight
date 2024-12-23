import "obsidian";

declare module "obsidian" {
    interface FileExplorerView extends View {
        ready: boolean;
        fileItems: Record<string, Item>;
        tree: {
            infinityScroll: {
                compute(): void;
                rootEl: FolderItem;
            };
        };
        navFileContainerEl: HTMLElement;
        sort(): void;
        getSortedFolderItems(folder: TFolder): Item[];
    }

    interface Item {
        file: TAbstractFile;
        selfEl: HTMLElement;
        vChildren?: {
            setChildren(items: Item[]): void;
        };
    }

    interface FolderItem extends Item {
        file: TFolder;
        vChildren: {
            setChildren(items: Item[]): void;
        };
    }
}
