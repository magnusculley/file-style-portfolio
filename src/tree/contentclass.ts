type DocumentPictureInPictureApi = {
    requestWindow: (options?: { width?: number; height?: number }) => Promise<Window>;
};

declare global {
    interface Window {
        documentPictureInPicture: DocumentPictureInPictureApi;
    }
}

export class Content{
    title: string;
    description: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }

    private buildPiPHtml(): string {
        return `
            <div class="pip-card">
                <h2>${this.title}</h2>
                <p class="pip-description">${this.description}</p>
            </div>
        `;
    }

    async display(nodeName?: string): Promise<void> {
        const pipApi = window.documentPictureInPicture;
        const pipWindow = await pipApi.requestWindow({ width: 420, height: 320 });
        pipWindow.document.body.innerHTML = this.buildPiPHtml();
    }
}
